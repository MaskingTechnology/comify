
import fileStorage from '../filestorage/module';
import database from '../database/module';

if (fileStorage.connected)
{
    await fileStorage.disconnect();
}

if (database.connected)
{
    await database.disconnect();
}

console.log('Node teardown complete');
