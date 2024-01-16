
import database from '../database/module';
import fileStorage from '../filestorage/module';
import notificationService from '../notification/module';

await database.connect();
await fileStorage.connect();
await notificationService.connect();
