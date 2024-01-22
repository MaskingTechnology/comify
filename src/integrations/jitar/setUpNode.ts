
import database from '../database/module';
import fileStorage from '../filestorage/module';
import notificationService from '../notification/module';

try
{
    await Promise.allSettled([
        database.connect(),
        fileStorage.connect(),
        notificationService.connect()
    ]);
}
catch (error: unknown)
{
    const disconnections = [];

    if (database.connected) disconnections.push(database.disconnect());
    if (fileStorage.connected) disconnections.push(fileStorage.disconnect());
    if (notificationService.connected) disconnections.push(notificationService.disconnect());

    await Promise.allSettled(disconnections);

    throw error;
}
