
import type { RecordQuery } from '^/integrations/database';
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getByName(origin: string): Promise<DataModel | undefined>
{
    const query: RecordQuery =
    {
        origin: { 'EQUALS': origin }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
