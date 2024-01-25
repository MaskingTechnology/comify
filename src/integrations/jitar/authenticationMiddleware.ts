
import AuthenticationMiddleware from './middlewares/AuthenticationMiddleware';
import identityProvider from '../authentication/module';

const authProcedures = {
    loginUrl: 'domain/authentication/getLoginUrl',
    login: 'domain/authentication/login',
    logout: 'domain/authentication/logout'
};

const whiteList: string[] = [
    'domain/post/explore',
    'domain/post/getTimeline',
    'domain/relation/explore'
];

export default new AuthenticationMiddleware(identityProvider, authProcedures, whiteList);
