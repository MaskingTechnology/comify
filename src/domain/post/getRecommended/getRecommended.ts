
import type { RecordQuery, RecordSort } from '@theshelf/database';
import database, { SortDirections } from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getRecommended(tenantId: string, requesterId: string, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        tenantId: { EQUALS: tenantId },
        creatorId: { NOT_EQUALS: requesterId },
        parentId: { EQUALS: undefined },
        deleted: { EQUALS: false }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
