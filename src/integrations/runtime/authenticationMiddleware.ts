
import identityProvider from '^/integrations/authentication';

import AuthenticationMiddleware from './middlewares/AuthenticationMiddleware';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const redirectPath = process.env.AUTHENTICATION_CLIENT_PATH || 'undefined';

const whiteList: string[] = ['domain/tenant/getByOriginConverted'];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectPath, whiteList);
