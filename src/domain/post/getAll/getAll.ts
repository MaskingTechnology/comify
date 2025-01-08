
import database, { RecordQuery, RecordSort, SortDirections } from '^/integrations/database/module';

import { Requester } from '^/domain/authentication';

import { RECORD_TYPE } from '../definitions';

import type { DataModel } from '../types';

export async function getAll(requester: Requester, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        creatorId: { NOT_EQUALS: requester.id },
        deleted: { EQUALS: false }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
