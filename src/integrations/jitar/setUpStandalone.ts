
import identityProvider from '../authentication/module';
import notificationService from '../notification/module';
import fileStorage from '../filestorage/module';
import database from '../database/module';

await identityProvider.connect({
    issuer: 'http://localhost:8080/realms/comify',
    clientId: 'openid',
    clientSecret: '',
    redirectUri: 'http://localhost:3000/rpc/domain/authentication/login'
});

await notificationService.connect();
await fileStorage.connect();
await database.connect('mongodb://development:development@localhost:27017', 'comify');

console.log('Setup complete');
