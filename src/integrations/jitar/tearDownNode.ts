
import database from '../database/module';
import fileStorage from '../filestorage/module';
import notificationService from '../notification/module';

if (database.connected) await database.disconnect();
if (fileStorage.connected) await fileStorage.disconnect();
if (notificationService.connected) await notificationService.disconnect();
