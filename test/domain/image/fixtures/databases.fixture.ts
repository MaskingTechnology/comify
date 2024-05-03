
import database from '^/integrations/database/module';

database.connect();

async function empty()
{
    await database.clear();

    return database;
}

export const DATABASES = { empty };
