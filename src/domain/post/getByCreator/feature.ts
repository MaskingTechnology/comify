
import database, { RecordQuery, RecordSort, SortDirections } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function feature(creatorId: string, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        creatorId: { 'EQUALS': creatorId },
        deleted: { 'EQUALS': false }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
