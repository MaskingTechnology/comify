
import { AuthenticationMiddleware } from '@jitar-plugins/authentication';

import identityProvider from './identityProvider';

const authProcedures = {
    loginUrl: 'social/security/authentication/getLoginUrl',
    login: 'social/security/authentication/login',
    logout: 'social/security/authentication/logout'
};

const redirectPath = process.env.AUTHENTICATION_CLIENT_PATH ?? '';

const whiteList: string[] = [
    'common/domain/tenant/getByOrigin'
];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectPath, whiteList);
