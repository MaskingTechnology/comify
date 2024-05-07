
import database from '^/integrations/database/module';

import { RECORD_TYPES, RECORDS } from './records.fixture';

await database.connect();

async function withEverything(): Promise<void>
{
    await database.clear();

    await database.createRecord(RECORD_TYPES.FRUITS, { ...RECORDS.FRUITS.APPLE });
    await database.createRecord(RECORD_TYPES.FRUITS, { ...RECORDS.FRUITS.PEAR });

    await database.createRecord(RECORD_TYPES.PIZZAS, { ...RECORDS.PIZZAS.MARGHERITA });
    await database.createRecord(RECORD_TYPES.PIZZAS, { ...RECORDS.PIZZAS.CALZONE });
    await database.createRecord(RECORD_TYPES.PIZZAS, { ...RECORDS.PIZZAS.PEPPERONI });
    await database.createRecord(RECORD_TYPES.PIZZAS, { ...RECORDS.PIZZAS.VEGETARIAN });
    await database.createRecord(RECORD_TYPES.PIZZAS, { ...RECORDS.PIZZAS.HAWAII });
}

export const DATABASES = { withEverything };
