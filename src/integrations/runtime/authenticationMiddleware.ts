
import identityProvider from '^/integrations/authentication';

import AuthenticationMiddleware from './middlewares/AuthenticationMiddleware';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const redirectUrl = process.env.AUTHENTICATION_CLIENT_URI || 'undefined';

const whiteList: string[] = [];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectUrl, whiteList);
