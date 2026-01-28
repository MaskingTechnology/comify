
import IdentityProvider, { OpenIDDriver, GoogleDriver } from '@theshelf/authentication';
import ConnectionManager from '@theshelf/connection';

import logger from '^/integrations/logging';

function setUpOpenID()
{
    return new OpenIDDriver({
        issuer: process.env.OPENID_ISSUER ?? '',
        clientId: process.env.OPENID_CLIENT_ID ?? '',
        clientSecret: process.env.OPENID_CLIENT_SECRET ?? '',
        redirectPath: process.env.OPENID_REDIRECT_PATH ?? '',
        allowInsecureRequests: process.env.OPENID_ALLOW_INSECURE_REQUESTS === 'true'
    });
}

function setUpGoogle()
{
    return new GoogleDriver({
        issuer: process.env.GOOGLE_ISSUER ?? '',
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        redirectPath: process.env.GOOGLE_REDIRECT_PATH ?? '',
        organizationDomain: process.env.GOOGLE_ORGANIZATION_DOMAIN ?? '',
        accessType: process.env.GOOGLE_ACCESS_TYPE ?? ''
    });
}

export const driver = process.env.AUTHENTICATION_DRIVER === 'openid'
    ? setUpOpenID()
    : setUpGoogle();

const identityProvider = new IdentityProvider(driver);

const connectionManager = new ConnectionManager({
    name: 'Identity provider',
    connectable: identityProvider,
    logger
});

export { identityProvider as default, connectionManager };
