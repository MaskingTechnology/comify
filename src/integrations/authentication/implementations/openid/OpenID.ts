
import { AuthorizationParameters, BaseClient, ClientMetadata, Issuer } from 'openid-client';

import { IdentityProvider } from '../../definitions/interfaces.js';
import { Identity, Session } from '../../definitions/types.js';
import NotConnected from '../../errors/NotConnected.js';

type OpenIDConfiguration = {
    issuer: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
};

export default class OpenID implements IdentityProvider
{
    #configuration: OpenIDConfiguration;
    #client?: BaseClient;

    constructor(configuration: OpenIDConfiguration)
    {
        this.#configuration = configuration;
    }

    get connected(): boolean
    {
        return this.#client !== undefined;
    }

    async connect(): Promise<void>
    {
        const metaData: ClientMetadata =
        {
            client_id: this.#configuration.clientId,
            client_secret: this.#configuration.clientSecret,
            redirect_uris: [this.#configuration.redirectUri],
            response_types: ['code']
        };

        const issuer = await Issuer.discover(this.#configuration.issuer);

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
            scope: 'openid profile email',
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

        const expires = tokenSet.expires_at as number * 1000;

        return {
            requester: session.requester,
            identity: session.identity,
            accessToken: tokenSet.access_token as string,
            refreshToken: tokenSet.refresh_token as string,
            expires: new Date(expires)
        };
    }

    logout(session: Session): Promise<void>
    {
        const client = this.#getClient();

        return client.revoke(session.refreshToken);
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
