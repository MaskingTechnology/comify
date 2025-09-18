
import database from '^/integrations/database';
import fileStore from '^/integrations/filestore';

const disconnections = [];

if (database.connected) disconnections.push(database.disconnect());
if (fileStore.connected) disconnections.push(fileStore.disconnect());

await Promise.allSettled(disconnections);
