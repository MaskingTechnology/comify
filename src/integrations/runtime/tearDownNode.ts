
import database from '^/integrations/database';
import fileStore from '^/integrations/filestore';
import notificationService from '^/integrations/notification';

const disconnections = [];

if (database.connected) disconnections.push(database.disconnect());
if (fileStore.connected) disconnections.push(fileStore.disconnect());
if (notificationService.connected) disconnections.push(notificationService.disconnect());

await Promise.allSettled(disconnections);
