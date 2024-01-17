
import database from '../database/module';
import fileStorage from '../filestorage/module';
import notificationService from '../notification/module';

const disconnections = [];

if (database.connected) disconnections.push(database.disconnect());
if (fileStorage.connected) disconnections.push(fileStorage.disconnect());
if (notificationService.connected) disconnections.push(notificationService.disconnect());

await Promise.allSettled(disconnections);
