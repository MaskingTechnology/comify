
import { Middleware, NextHandler, Request, Response, Unauthorized } from 'jitar';
import { IdentityProvider, Session } from '../../authentication/module';
import { generateKey } from '../../utilities/crypto';

type AuthProcedures = {
    loginUrl: string;
    login: string;
    logout: string;
};

const IDENTITY_PARAMETER = 'identity';
const REQUESTER_PARAMETER = '*requester';

const sessions = new Map<string, Session>();

export default class AuthenticationMiddleware implements Middleware
{
    #identityProvider: IdentityProvider;
    #authProcedures: AuthProcedures;
    #redirectUrl: string;
    #whiteList: string[];

    constructor(identityProvider: IdentityProvider, authProcedures: AuthProcedures, redirectUrl: string, whiteList: string[])
    {
        this.#identityProvider = identityProvider;
        this.#authProcedures = authProcedures;
        this.#redirectUrl = redirectUrl;
        this.#whiteList = whiteList;
    }

    async handle(request: Request, next: NextHandler): Promise<Response>
    {
        switch (request.fqn)
        {
            case this.#authProcedures.loginUrl: return this.#getLoginUrl();
            case this.#authProcedures.login: return this.#createSession(request, next);
            case this.#authProcedures.logout: return this.#destroySession(request, next);
            default: return this.#handleRequest(request, next);
        }
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

        throw new Unauthorized('Unauthorized');
    }

    #authorizeProtected(key: string): Session
    {
        return this.#getSession(key);
    }

    async #getLoginUrl(): Promise<Response>
    {
        const url = await this.#identityProvider.getLoginUrl();

        return new Response(url);
    }

    async #createSession(request: Request, next: NextHandler): Promise<Response>
    {
        const data = Object.fromEntries(request.args);
        const session = await this.#identityProvider.login(data);

        request.args.clear();
        request.setArgument(IDENTITY_PARAMETER, session.identity);

        const response = await next();

        session.key = generateKey();
        session.requester = response.result;

        sessions.set(session.key, session);

        this.#setAuthorizationHeader(response, session);
        this.#setRedirectHeader(response, session.key);

        return response;
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
        catch (error)
        {
            throw new Unauthorized('Session expired');
        }
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

    #setRedirectHeader(response: Response, key: string): void
    {
        response.setHeader('Location', `${this.#redirectUrl}?key=${key}`);
    }
}
