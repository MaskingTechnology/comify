
import type { RecordQuery, RecordSort } from '@theshelf/database';
import database, { SortDirections } from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveData(creatorIds: string[], limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        deleted: { 'EQUALS': false },
        parentId: { 'EQUALS': undefined },
        creatorId: { 'IN': creatorIds }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
