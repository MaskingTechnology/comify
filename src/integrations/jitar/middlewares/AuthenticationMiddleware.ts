
import { Middleware, Request, Response, NextHandler, Unauthorized } from 'jitar';

import { IdentityProvider, Session, Token } from '../../authentication/module';

type AuthProcedures = {
    loginUrl: string;
    login: string;
    logout: string;
};

const sessions = new Map<string, Session>();

export default class AuthenticationMiddleware implements Middleware
{
    #identityProvider: IdentityProvider;
    #authProcedures: AuthProcedures;
    #whiteList: string[];

    constructor(identityProvider: IdentityProvider, authProcedures: AuthProcedures, whiteList: string[])
    {
        this.#identityProvider = identityProvider;
        this.#authProcedures = authProcedures;
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

        request.setArgument('requester', activeSession.requester);

        const response = await next();

        if (activeSession !== storedSession)
        {
            this.#setAuthorizationHeader(response, activeSession);
        }

        return response;
    }

    #authorize(request: Request): Session | undefined
    {
        const token = this.#extractAuthorizationToken(request);

        return token === undefined
            ? this.#authorizePublic(request.fqn)
            : this.#authorizeProtected(token);
    }

    #authorizePublic(fqn: string): undefined
    {
        if (this.#whiteList.includes(fqn))
        {
            return;
        }

        throw new Unauthorized('Unauthorized');
    }

    #authorizeProtected(token: Token): Session
    {
        return this.#getSession(token);
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
        request.setArgument('identity', session.identity);

        const response = await next();

        this.#setAuthorizationHeader(response, session);

        session.requester = response.result;
        sessions.set(session.accessToken, session);

        return response;
    }

    #getSession(token: Token): Session
    {
        const session = sessions.get(token);

        if (session === undefined)
        {
            throw new Unauthorized('Invalid access token');
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
        const newSession = await this.#identityProvider.refresh(session);

        const oldToken = session.accessToken;
        const newToken = newSession.accessToken;

        sessions.delete(oldToken);
        sessions.set(newToken, newSession);

        return newSession;
    }

    async #destroySession(request: Request, next: NextHandler): Promise<Response>
    {
        const token = this.#extractAuthorizationToken(request);

        if (token === undefined)
        {
            throw new Unauthorized('Invalid access token');
        }

        const session = this.#getSession(token);

        this.#identityProvider.logout(session);

        sessions.delete(token);

        return next();
    }

    #extractAuthorizationToken(request: Request): Token | undefined
    {
        const authorization = this.#getAuthorizationHeader(request);

        if (authorization === undefined)
        {
            return;
        }

        const [type, token] = authorization.split(' ');

        if (type.toLowerCase() !== 'bearer')
        {
            throw new Unauthorized('Invalid authorization type');
        }

        return token;
    }

    #getAuthorizationHeader(request: Request): string | undefined
    {
        return request.getHeader('Authorization');
    }

    #setAuthorizationHeader(response: Response, session: Session): void
    {
        response.setHeader('Authorization', `Bearer ${session.accessToken}`);
    }
}
