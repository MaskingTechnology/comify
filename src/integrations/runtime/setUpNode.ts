
import database from '^/integrations/database';
import fileStore from '^/integrations/filestore';
import notificationService from '^/integrations/notification';

try
{
    await Promise.allSettled([
        database.connect(),
        fileStore.connect(),
        notificationService.connect()
    ]);
}
catch (error: unknown)
{
    const disconnections = [];

    if (database.connected) disconnections.push(database.disconnect());
    if (fileStore.connected) disconnections.push(fileStore.disconnect());
    if (notificationService.connected) disconnections.push(notificationService.disconnect());

    await Promise.allSettled(disconnections);

    throw error;
}
