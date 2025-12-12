
import identityProvider from '@theshelf/authentication';

import { AuthenticationMiddleware } from '@jitar-plugins/authentication';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const redirectPath = process.env.AUTHENTICATION_CLIENT_PATH || 'undefined';

const whiteList: string[] = [
    'domain/tenant/getByOriginConverted'
];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectPath, whiteList);
