
import database from '^/integrations/database';

database.connect();

async function empty(): Promise<void>
{
    database.clear();
}

export const DATABASES = { empty };
