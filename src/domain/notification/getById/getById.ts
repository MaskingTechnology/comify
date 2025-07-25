
import type { RecordQuery } from '^/integrations/database';
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getById(receiverId: string, id: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        id: { EQUALS: id },
        receiverId: { EQUALS: receiverId },
        deleted: { EQUALS: false }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel>;
}
