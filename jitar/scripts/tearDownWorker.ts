
import database from '@theshelf/database';
import fileStore from '@theshelf/filestore';

const disconnections = [];

if (database.connected) disconnections.push(database.disconnect());
if (fileStore.connected) disconnections.push(fileStore.disconnect());

await Promise.allSettled(disconnections);
