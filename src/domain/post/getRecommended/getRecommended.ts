
import database, { RecordQuery, RecordSort, SortDirections } from '^/integrations/database';

import { Requester } from '^/domain/authentication';

import { RECORD_TYPE } from '../definitions';

import type { DataModel } from '../types';

export default async function getRecommended(requester: Requester, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        deleted: { EQUALS: false },
        parentId: { EQUALS: null },
        creatorId: { NOT_EQUALS: requester.id }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
