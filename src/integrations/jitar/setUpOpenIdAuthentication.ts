
import identityProvider from '../authentication/implementations/OpenID.js';

await identityProvider.connect({
    issuer: 'http://localhost:8080/realms/comify',
    clientId: 'openid',
    clientSecret: '',
    redirectUri: 'http://localhost:3000/rpc/domain/authentication/login'
});
