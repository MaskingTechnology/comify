
import database from '^/integrations/database/module';

database.connect();

async function empty(): Promise<void>
{
    database.clear();
}

export const DATABASES = { empty };
