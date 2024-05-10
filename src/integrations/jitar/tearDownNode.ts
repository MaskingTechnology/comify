
import database from '../database/module';
import fileStore from '../filestore/module';
import notificationService from '../notification/module';

const disconnections = [];

if (database.connected) disconnections.push(database.disconnect());
if (fileStore.connected) disconnections.push(fileStore.disconnect());
if (notificationService.connected) disconnections.push(notificationService.disconnect());

await Promise.allSettled(disconnections);
