
import IdentityProvider from '@theshelf/authentication';
import { OpenIDDriver } from '@theshelf/authentication-driver-openid';
import ConnectionManager from '@theshelf/connection';

import { shelfLogger } from '^/integrations/logging';

function setUpOpenID()
{
    return new OpenIDDriver({
        issuer: process.env.OPENID_ISSUER ?? '',
        clientId: process.env.OPENID_CLIENT_ID ?? '',
        clientSecret: process.env.OPENID_CLIENT_SECRET ?? '',
        redirectPath: process.env.OPENID_REDIRECT_PATH ?? '',
        secretKey: process.env.OPENID_SECRET_KEY ?? '',
        allowInsecureRequests: process.env.OPENID_ALLOW_INSECURE_REQUESTS === 'true'
    });
}

export const driver = setUpOpenID();

const identityProvider = new IdentityProvider(driver, shelfLogger);

const connectionManager = new ConnectionManager({
    name: 'Identity provider',
    connectable: identityProvider
}, shelfLogger);

export { identityProvider as default, connectionManager };
