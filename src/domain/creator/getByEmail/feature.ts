
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function feature(email: string): Promise<DataModel | undefined>
{
    const query = { email: { EQUALS: email } };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
