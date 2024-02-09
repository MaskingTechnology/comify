
import AuthenticationMiddleware from './middlewares/AuthenticationMiddleware';
import identityProvider from '../authentication/module';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const redirectUrl = 'http://localhost:5173/identify';

const whiteList: string[] = [];

export default new AuthenticationMiddleware(identityProvider, authProcedures, redirectUrl, whiteList);
