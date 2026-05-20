
import IdentityProvider from '@theshelf/authentication';
import { OpenIDDriver } from '@theshelf/authentication-driver-openid';
import ConnectionManager from '@theshelf/connection';

import { shelfLogger } from '^/integrations/logging';

function setUpOpenID()
{
    const issuer = process.env.OPENID_ISSUER ?? '';
    const clientId = process.env.OPENID_CLIENT_ID ?? '';
    const clientSecret = process.env.OPENID_CLIENT_SECRET ?? '';
    const redirectPath = process.env.OPENID_REDIRECT_PATH ?? '';
    const signingSecret = process.env.OPENID_SIGNING_SECRET ?? '';
    const allowInsecureRequests = process.env.OPENID_ALLOW_INSECURE_REQUESTS === 'true';
    const ttl = process.env.OPENID_LOGIN_TTL
        ? Number.parseInt(process.env.OPENID_LOGIN_TTL)
        : 1_800_000;

    return new OpenIDDriver({ issuer, clientId, clientSecret, redirectPath, signingSecret, allowInsecureRequests, ttl });
}

export const driver = setUpOpenID();

const identityProvider = new IdentityProvider(driver, shelfLogger);

const connectionManager = new ConnectionManager({
    name: 'Identity provider',
    connectable: identityProvider
}, shelfLogger);

export { identityProvider as default, connectionManager };
