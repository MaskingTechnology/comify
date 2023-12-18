
import { Issuer, generators, BaseClient, ClientMetadata, AuthorizationParameters } from 'openid-client';
import jwt from 'jsonwebtoken';

import { IdentityProvider } from '../definitions/interfaces.js';
import { Identity } from '../definitions/types.js';
import { NotConnected } from '../definitions/errors.js';

export const Issuers =
{
    GOOGLE: 'https://accounts.google.com',
    MICROSOFT: 'https://login.microsoftonline.com/common/v2.0'
};

Object.freeze(Issuers);

export type OpenIDConfiguration = {
    issuer: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
};

export default class OpenID implements IdentityProvider
{
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
            response_types: ['id_token']
        };

        const issuer = await Issuer.discover(configuration.issuer);
        this.#client = new issuer.Client(metaData);
    }

    async disconnect(): Promise<void>
    {
        this.#client = undefined;
    }

    async getLoginUrl(): Promise<string>
    {
        const client = this.#getClient();
        const nonce = generators.nonce();
        const parameters: AuthorizationParameters =
        {
            scope: 'openid email profile',
            response_mode: 'form_post',
            nonce: nonce
        };

        return client.authorizationUrl(parameters);
    }

    async login(data: Record<string, unknown>): Promise<Identity>
    {
        const token = data.id_token as string;
        const decoded = jwt.decode(token) as Record<string, unknown>;

        return {
            name: decoded.name as string,
            nickname: decoded.nickname as string,
            picture: decoded.picture as string,
            email: decoded.email as string,
            email_verified: decoded.email_verified as boolean
        };
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
