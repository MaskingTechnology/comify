
import identityProvider from '../authentication/module';
import notificationService from '../notification/module';
import fileStorage from '../filestorage/module';
import database from '../database/module';

if (identityProvider.connected) await identityProvider.disconnect();
if (notificationService.connected) await notificationService.disconnect();
if (fileStorage.connected) await fileStorage.disconnect();
if (database.connected) await database.disconnect();

console.log('Teardown complete');
