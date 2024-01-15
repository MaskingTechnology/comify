
import database from './module';

if (database.connected)
{
    await database.disconnect();
}
