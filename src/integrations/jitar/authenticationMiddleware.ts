
import identityProvider from '../authentication/module';
import AuthenticationMiddleware from './middlewares/AuthenticationMiddleware';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const redirectUrl = 'http://localhost:5173/identify';

const whiteList: string[] = [];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectUrl, whiteList);
