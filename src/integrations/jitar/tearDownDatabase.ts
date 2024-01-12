
import database from '../database/module';

if (database.connected)
{
    await database.disconnect();
}
