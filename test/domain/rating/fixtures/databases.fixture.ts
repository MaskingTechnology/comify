
import database from '^/integrations/database/module';

database.connect();

async function empty()
{
    await database.clear();
}

export const DATABASES = { empty };
