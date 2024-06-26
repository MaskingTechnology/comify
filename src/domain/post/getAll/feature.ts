
import type { Requester } from '^/domain/authentication/types';
import database, { RecordQuery, RecordSort, SortDirections } from '^/integrations/database/module';
import { RECORD_TYPE } from '../definitions';

import type { DataModel } from '../types';

export default async function feature(requester: Requester): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        creatorId: { NOT_EQUALS: requester.id },
        deleted: { EQUALS: false }

    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort) as Promise<DataModel[]>;
}
