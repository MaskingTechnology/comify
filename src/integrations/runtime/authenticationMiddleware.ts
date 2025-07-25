
import identityProvider from '^/integrations/authentication';

import { TENANT_BY_ORIGIN_PATH } from '^/domain/definitions';

import AuthenticationMiddleware from './middlewares/AuthenticationMiddleware';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const redirectPath = process.env.AUTHENTICATION_CLIENT_PATH || 'undefined';

const whiteList: string[] = [TENANT_BY_ORIGIN_PATH];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectPath, whiteList);
