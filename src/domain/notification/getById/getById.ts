
import type { RecordQuery } from '^/integrations/database';
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getById(id: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        id: { EQUALS: id },
        deleted: { EQUALS: false }
    };
    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel>;
}
