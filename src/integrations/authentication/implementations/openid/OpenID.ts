
import
{
    Configuration, DiscoveryRequestOptions,
    allowInsecureRequests,
    authorizationCodeGrant,
    buildAuthorizationUrl,
    calculatePKCECodeChallenge,
    discovery,
    fetchUserInfo,
    randomPKCECodeVerifier,
    refreshTokenGrant,
    tokenRevocation
} from 'openid-client';

import { IdentityProvider } from '../../definitions/interfaces.js';
import { Identity, Session } from '../../definitions/types.js';
import NotConnected from '../../errors/NotConnected.js';

type OpenIDConfiguration = {
    issuer: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    allowInsecureRequests: boolean;
};

export default class OpenID implements IdentityProvider
{
    readonly #configuration: OpenIDConfiguration;
    #config?: Configuration;

    readonly #codeVerifier = randomPKCECodeVerifier();

    constructor(configuration: OpenIDConfiguration)
    {
        this.#configuration = configuration;
    }

    get connected(): boolean
    {
        return this.#config !== undefined;
    }

    async connect(): Promise<void>
    {
        const issuer = new URL(this.#configuration.issuer);
        const clientId = this.#configuration.clientId;
        const clientSecret = this.#configuration.clientSecret;
        const requestOptions = this.#getRequestOptions();

        this.#config = await discovery(issuer, clientId, clientSecret, undefined, requestOptions);
    }

    async disconnect(): Promise<void>
    {
        this.#config = undefined;
    }

    async getLoginUrl(): Promise<string>
    {
        const redirect_uri = this.#configuration.redirectUri;
        const scope = 'openid profile email';
        const code_challenge = await calculatePKCECodeChallenge(this.#codeVerifier);
        const code_challenge_method = 'S256';

        const parameters: Record<string, string> = {
            redirect_uri,
            scope,
            code_challenge,
            code_challenge_method
        };

        const config = this.#getConfig();
        const redirectTo = buildAuthorizationUrl(config, parameters);

        return redirectTo.href;
    }

    async login(data: Record<string, unknown>): Promise<Session>
    {
        const config = this.#getConfig();
        const currentUrl = new URL(`${this.#configuration.redirectUri}?session_state=${data.session_state}&iss=${data.iss}&code=${data.code}`);

        const tokens = await authorizationCodeGrant(config, currentUrl, {
            pkceCodeVerifier: this.#codeVerifier,
            idTokenExpected: true
        });

        const access_token = tokens.access_token as string;
        const claims = tokens.claims();

        const sub = claims!.sub as string;
        const expires = claims!.exp as number * 1000;

        const userInfo = await fetchUserInfo(config, access_token, sub);

        const identity: Identity = {
            name: userInfo.name as string,
            nickname: userInfo.nickname as string,
            picture: userInfo.picture as string,
            email: userInfo.email as string,
            email_verified: userInfo.email_verified as boolean
        };

        return {
            identity: identity,
            accessToken: tokens.access_token as string,
            refreshToken: tokens.refresh_token as string,
            expires: new Date(expires)
        };
    }

    async refresh(session: Session): Promise<Session>
    {
        const config = this.#getConfig();
        const tokens = await refreshTokenGrant(config, session.refreshToken);

        const claims = tokens.claims();
        const expires = claims!.exp as number * 1000;

        return {
            requester: session.requester,
            identity: session.identity,
            accessToken: tokens.access_token as string,
            refreshToken: tokens.refresh_token as string,
            expires: new Date(expires)
        };
    }

    logout(session: Session): Promise<void>
    {
        const config = this.#getConfig();

        return tokenRevocation(config, session.refreshToken);
    }

    #getConfig(): Configuration
    {
        if (this.#config === undefined)
        {
            throw new NotConnected('OpenID client not connected');
        }

        return this.#config;
    }

    #getRequestOptions(): DiscoveryRequestOptions
    {
        const options: DiscoveryRequestOptions = {};

        if (this.#configuration.allowInsecureRequests)
        {
            options.execute = [allowInsecureRequests];
        }

        return options;
    }
}
