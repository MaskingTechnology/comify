
import identityProvider from '^/integrations/authentication';

import AuthenticationMiddleware from './middlewares/AuthenticationMiddleware';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl/feature',
    login: 'domain/authentication/login/feature',
    logout: 'domain/authentication/logout/feature'
};

const redirectUrl = process.env.AUTHENTICATION_CLIENT_URI || 'undefined';

const whiteList: string[] = [];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectUrl, whiteList);
