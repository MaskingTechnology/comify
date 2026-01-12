
import database from './database';

if (database.connected)
{
    await database.disconnect();
}
