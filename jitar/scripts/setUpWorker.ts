
import database from '@theshelf/database';
import fileStore from '@theshelf/filestore';

try
{
    await Promise.allSettled([
        database.connect(),
        fileStore.connect()
    ]);
}
catch (error)
{
    const disconnections = [];

    if (database.connected) disconnections.push(database.disconnect());
    if (fileStore.connected) disconnections.push(fileStore.disconnect());

    await Promise.allSettled(disconnections);

    throw error;
}
