
import type { RecordQuery, RecordSort } from '@theshelf/database';
import { SortDirections } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(tenantId: string, requesterId: string, limit: number, offset: number): Promise<Record[]>
{
    const query: RecordQuery =
    {
        tenantId: { EQUALS: tenantId },
        creatorId: { NOT_EQUALS: requesterId },
        parentId: { EQUALS: undefined },
        deleted: { EQUALS: false }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<Record[]>;
}
