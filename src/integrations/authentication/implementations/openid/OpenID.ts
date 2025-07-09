
import
{
    allowInsecureRequests, authorizationCodeGrant, buildAuthorizationUrlWithPAR, calculatePKCECodeChallenge, discovery,
    fetchUserInfo, randomPKCECodeVerifier, refreshTokenGrant, tokenRevocation
} from 'openid-client';

import type { Configuration, DiscoveryRequestOptions, IDToken, TokenEndpointResponse, TokenEndpointResponseHelpers } from 'openid-client';

import type { IdentityProvider } from '../../definitions/interfaces';
import type { Identity, Session } from '../../definitions/types';
import LoginFailed from '../../errors/LoginFailed';
import NotConnected from '../../errors/NotConnected';

type OpenIDConfiguration = {
    issuer: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    allowInsecureRequests: boolean;
};

export default class OpenID implements IdentityProvider
{
    readonly #providerConfiguration: OpenIDConfiguration;
    #clientConfiguration?: Configuration;

    readonly #codeVerifier = randomPKCECodeVerifier();

    constructor(configuration: OpenIDConfiguration)
    {
        this.#providerConfiguration = configuration;
    }

    get connected(): boolean
    {
        return this.#clientConfiguration !== undefined;
    }

    async connect(): Promise<void>
    {
        const issuer = new URL(this.#providerConfiguration.issuer);
        const clientId = this.#providerConfiguration.clientId;
        const clientSecret = this.#providerConfiguration.clientSecret;
        const requestOptions = this.#getRequestOptions();

        this.#clientConfiguration = await discovery(issuer, clientId, clientSecret, undefined, requestOptions);
    }

    async disconnect(): Promise<void>
    {
        this.#clientConfiguration = undefined;
    }

    async getLoginUrl(): Promise<string>
    {
        const redirect_uri = this.#providerConfiguration.redirectUri;
        const scope = 'openid profile email';
        const code_challenge = await calculatePKCECodeChallenge(this.#codeVerifier);
        const code_challenge_method = 'S256';

        const parameters: Record<string, string> = {
            redirect_uri,
            scope,
            code_challenge,
            code_challenge_method
        };

        const clientConfiguration = this.#getClientConfiguration();
        const redirectTo = await buildAuthorizationUrlWithPAR(clientConfiguration, parameters);

        return redirectTo.href;
    }

    async login(data: Record<string, unknown>): Promise<Session>
    {
        const clientConfiguration = this.#getClientConfiguration();
        const currentUrl = new URL(`${this.#providerConfiguration.redirectUri}?session_state=${data.session_state}&iss=${data.iss}&code=${data.code}`);

        const tokens = await authorizationCodeGrant(clientConfiguration, currentUrl, {
            pkceCodeVerifier: this.#codeVerifier,
            idTokenExpected: true
        });

        const access_token = tokens.access_token;
        const claims = this.#getClaims(tokens);

        const sub = claims.sub;
        const expires = claims.exp * 1000;

        const userInfo = await fetchUserInfo(clientConfiguration, access_token, sub);

        const identity: Identity = {
            name: userInfo.name as string,
            nickname: userInfo.nickname,
            picture: userInfo.picture,
            email: userInfo.email as string,
            email_verified: userInfo.email_verified as boolean
        };

        return {
            identity: identity,
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token as string,
            expires: new Date(expires)
        };
    }

    async refresh(session: Session): Promise<Session>
    {
        const config = this.#getClientConfiguration();
        const tokens = await refreshTokenGrant(config, session.refreshToken);

        const claims = this.#getClaims(tokens);
        const expires = claims.exp * 1000;

        return {
            requester: session.requester,
            identity: session.identity,
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token as string,
            expires: new Date(expires)
        };
    }

    logout(session: Session): Promise<void>
    {
        const config = this.#getClientConfiguration();

        return tokenRevocation(config, session.refreshToken);
    }

    #getClientConfiguration(): Configuration
    {
        if (this.#clientConfiguration === undefined)
        {
            throw new NotConnected('OpenID client not connected');
        }

        return this.#clientConfiguration;
    }

    #getRequestOptions(): DiscoveryRequestOptions
    {
        const options: DiscoveryRequestOptions = {};

        if (this.#providerConfiguration.allowInsecureRequests)
        {
            options.execute = [allowInsecureRequests];
        }

        return options;
    }

    #getClaims(tokens: TokenEndpointResponse & TokenEndpointResponseHelpers): IDToken
    {
        const claims = tokens.claims();

        if (claims === undefined)
        {
            throw new LoginFailed('No claims in ID token');
        }

        return claims;
    }
}
