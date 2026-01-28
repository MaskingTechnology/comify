
import { AuthenticationMiddleware } from '@jitar-plugins/authentication';

import identityProvider from './identityProvider';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const redirectPath = process.env.AUTHENTICATION_CLIENT_PATH || '';

const whiteList: string[] = [
    'domain/tenant/getByOriginConverted'
];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectPath, whiteList);
