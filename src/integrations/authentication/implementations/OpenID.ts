
import { Issuer, BaseClient, ClientMetadata, AuthorizationParameters } from 'openid-client';

import { IdentityProvider } from '../definitions/interfaces.js';
import { Identity, Session } from '../definitions/types.js';
import { NotConnected } from '../definitions/errors.js';

export type OpenIDConfiguration = {
    issuer: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
};

export default class OpenID implements IdentityProvider
{
    #configuration?: OpenIDConfiguration;
    #client?: BaseClient;

    get connected(): boolean
    {
        return this.#client !== undefined;
    }

    async connect(configuration: OpenIDConfiguration): Promise<void>
    {
        const metaData: ClientMetadata =
        {
            client_id: configuration.clientId,
            client_secret: configuration.clientSecret,
            redirect_uris: [configuration.redirectUri],
            response_types: ['code']
        };

        const issuer = await Issuer.discover(configuration.issuer);

        this.#configuration = configuration;
        this.#client = new issuer.Client(metaData);
    }

    async disconnect(): Promise<void>
    {
        this.#client = undefined;
    }

    async getLoginUrl(): Promise<string>
    {
        const client = this.#getClient();
        const parameters: AuthorizationParameters =
        {
            scope: 'openid profile',
            response_mode: 'form_post'
        };

        return client.authorizationUrl(parameters);
    }

    async login(data: Record<string, unknown>): Promise<Session>
    {
        const client = this.#getClient();
        const redirectUri = this.#configuration?.redirectUri;

        const tokenSet = await client.callback(redirectUri, data);
        const userinfo = await client.userinfo(tokenSet.access_token as string);

        const identity: Identity = {
            name: userinfo.name as string,
            nickname: userinfo.nickname as string,
            picture: userinfo.picture as string,
            email: userinfo.email as string,
            email_verified: userinfo.email_verified as boolean
        };

        const expires = tokenSet.expires_at as number * 1000;

        return {
            identity: identity,
            accessToken: tokenSet.access_token as string,
            refreshToken: tokenSet.refresh_token as string,
            expires: new Date(expires)
        };
    }

    async refresh(session: Session): Promise<Session>
    {
        const client = this.#getClient();

        const tokenSet = await client.refresh(session.refreshToken);

        session.accessToken = tokenSet.access_token as string;
        session.refreshToken = tokenSet.refresh_token as string;

        return session;
    }

    logout(session: Session): Promise<void>
    {
        const client = this.#getClient();

        return client.revoke(session.accessToken);
    }

    #getClient(): BaseClient
    {
        if (this.#client === undefined)
        {
            throw new NotConnected('OpenID client not connected');
        }

        return this.#client;
    }
}
