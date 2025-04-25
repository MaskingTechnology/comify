
import type { Middleware, NextHandler, Request } from 'jitar';
import { Response } from 'jitar';

import type { IdentityProvider, Session } from '^/integrations/authentication';
import { generateKey } from '^/integrations/utilities/crypto';

import Unauthorized from '../errors/Unauthorized';

type AuthProcedures = {
    loginUrl: string;
    login: string;
    logout: string;
};

const IDENTITY_PARAMETER = 'identity';
const ORIGIN_PARAMETER = 'origin';
const REQUESTER_PARAMETER = '*requester';
const JITAR_TRUST_HEADER_KEY = 'X-Jitar-Trust-Key';
const COMIFY_HOST_COOKIE_KEY = 'x-comify-origin';

const sessions = new Map<string, Session>();

export default class AuthenticationMiddleware implements Middleware
{
    readonly #identityProvider: IdentityProvider;
    readonly #authProcedures: AuthProcedures;
    readonly #redirectPath: string;
    readonly #whiteList: string[];

    constructor(identityProvider: IdentityProvider, authProcedures: AuthProcedures, redirectPath: string, whiteList: string[])
    {
        this.#identityProvider = identityProvider;
        this.#authProcedures = authProcedures;
        this.#redirectPath = redirectPath;
        this.#whiteList = whiteList;
    }

    async handle(request: Request, next: NextHandler): Promise<Response>
    {
        if (request.hasHeader(JITAR_TRUST_HEADER_KEY))
        {
            return next();
        }

        switch (request.fqn)
        {
            case this.#authProcedures.loginUrl: return this.#getLoginUrl(request);
            case this.#authProcedures.login: return this.#createSession(request, next);
            case this.#authProcedures.logout: return this.#destroySession(request, next);
            default: return this.#handleRequest(request, next);
        }
    }

    async #getLoginUrl(request: Request): Promise<Response>
    {
        const origin = this.#getOrigin(request);

        if (origin === undefined)
        {
            throw new Unauthorized('Invalid origin');
        }

        const url = await this.#identityProvider.getLoginUrl(origin);

        return new Response(200, url);
    }

    async #createSession(request: Request, next: NextHandler): Promise<Response>
    {
        const data = Object.fromEntries(request.args);
        const origin = this.#getOrigin(request);
        const session = await this.#identityProvider.login(origin, data);

        request.args.clear();
        request.setArgument(IDENTITY_PARAMETER, session.identity);
        request.setArgument(ORIGIN_PARAMETER, origin);

        const response = await next();

        // if (response.status !== 200)
        // {
        //     throw new Unauthorized('Invalid tenant');
        // }

        session.key = generateKey();
        session.requester = response.result;

        sessions.set(session.key, session);

        this.#setAuthorizationHeader(response, session);
        this.#setRedirectHeader(response, session.key, origin);

        return response;
    }

    async #destroySession(request: Request, next: NextHandler): Promise<Response>
    {
        const key = this.#extractAuthorizationKey(request);

        if (key === undefined)
        {
            throw new Unauthorized('Invalid authorization key');
        }

        const session = this.#getSession(key);

        await this.#identityProvider.logout(session);

        sessions.delete(key);

        return next();
    }

    async #handleRequest(request: Request, next: NextHandler): Promise<Response>
    {
        const storedSession = this.#authorize(request);

        if (storedSession === undefined)
        {
            return next();
        }

        const activeSession = this.#isSessionExpired(storedSession)
            ? await this.#refreshSession(storedSession)
            : storedSession;

        request.setArgument(REQUESTER_PARAMETER, activeSession.requester);

        const response = await next();

        if (activeSession !== storedSession)
        {
            this.#setAuthorizationHeader(response, activeSession);
        }

        return response;
    }

    #authorize(request: Request): Session | undefined
    {
        const key = this.#extractAuthorizationKey(request);

        return key === undefined
            ? this.#authorizePublic(request.fqn)
            : this.#authorizeProtected(key);
    }

    #authorizePublic(fqn: string): undefined
    {
        if (this.#whiteList.includes(fqn))
        {
            return;
        }

        throw new Unauthorized('Not a public resource');
    }

    #authorizeProtected(key: string): Session
    {
        return this.#getSession(key);
    }

    #getSession(key: string): Session
    {
        const session = sessions.get(key);

        if (session === undefined)
        {
            throw new Unauthorized('Invalid authorization key');
        }

        return session;
    }

    #isSessionExpired(session: Session): boolean
    {
        const now = new Date();

        return session.expires < now;
    }

    async #refreshSession(session: Session): Promise<Session>
    {
        try
        {
            const newSession = await this.#identityProvider.refresh(session);

            newSession.key = generateKey();

            sessions.delete(session.key as string);
            sessions.set(newSession.key, newSession);

            return newSession;
        }
        catch
        {
            throw new Unauthorized('Session expired');
        }
    }

    #extractAuthorizationKey(request: Request): string | undefined
    {
        const authorization = this.#getAuthorizationHeader(request);

        if (authorization === undefined)
        {
            return;
        }

        const [type, key] = authorization.split(' ');

        if (type.toLowerCase() !== 'bearer')
        {
            throw new Unauthorized('Invalid authorization type');
        }

        return key;
    }

    #getAuthorizationHeader(request: Request): string | undefined
    {
        return request.getHeader('Authorization');
    }

    #setAuthorizationHeader(response: Response, session: Session): void
    {
        response.setHeader('Authorization', `Bearer ${session.key}`);
    }

    #setRedirectHeader(response: Response, key: string, origin: string): void
    {
        response.setHeader('Location', new URL(`${this.#redirectPath}?key=${key}`, origin).href);
    }

    #getOrigin(request: Request): string
    {
        const cookie = request.getHeader('cookie');

        if (cookie === undefined)
        {
            throw new Unauthorized('Invalid origin');
        }

        const cookies = this.#getCookies(cookie);
        const origin = cookies.get(COMIFY_HOST_COOKIE_KEY);

        if (origin === undefined)
        {
            throw new Unauthorized('Invalid origin');
        }

        return origin;
    }

    #getCookies(input: string): Map<string, string>
    {
        const cookies = input.split(';');
        const cookieMap = new Map<string, string>();

        for (const cookie of cookies)
        {
            const parts = cookie.trim().split('=');

            const key = parts[0]?.toLocaleLowerCase();
            const value = parts.length > 2 ? parts.slice(1).join('=') : parts[1];

            cookieMap.set(key, value);
        }

        return cookieMap;
    }
}
