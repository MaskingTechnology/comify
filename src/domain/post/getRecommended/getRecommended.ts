
import type { RecordQuery, RecordSort } from '^/integrations/database';
import database, { SortDirections } from '^/integrations/database';

import type { Requester } from '^/domain/authentication';

import { RECORD_TYPE } from '../definitions';

import type { DataModel } from '../types';

export default async function getRecommended(requester: Requester, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        deleted: { EQUALS: false },
        parentId: { EQUALS: undefined },
        creatorId: { NOT_EQUALS: requester.id },
        tenantId: { EQUALS: requester.tenantId }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
