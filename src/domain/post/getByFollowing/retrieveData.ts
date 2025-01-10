
import database, { RecordQuery, RecordSort, SortDirections } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveData(creatorIds: string[], limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        creatorId: { 'IN': creatorIds },
        deleted: { 'EQUALS': false }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
