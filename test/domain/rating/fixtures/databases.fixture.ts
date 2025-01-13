
import database from '^/integrations/database';

database.connect();

async function empty()
{
    await database.clear();
}

export const DATABASES = { empty };
