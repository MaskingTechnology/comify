
import { AuthenticationMiddleware } from '@jitar-plugins/authentication';

import identityProvider from './identityProvider';

const authProcedures = {
    loginUrl: 'social/domain/authentication/getLoginUrl',
    login: 'social/domain/authentication/login',
    logout: 'social/domain/authentication/logout'
};

const redirectPath = process.env.AUTHENTICATION_CLIENT_PATH || '';

const whiteList: string[] = [
    'social/domain/tenant/getByOriginConverted'
];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectPath, whiteList);
