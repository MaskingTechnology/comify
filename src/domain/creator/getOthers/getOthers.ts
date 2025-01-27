
import database, { QueryStatement, RecordQuery, RecordSort, SortDirections } from '^/integrations/database';

import { RECORD_TYPE, SortOrder, SortOrders } from '../definitions';
import type { DataModel } from '../types';

export default async function getOthers(ids: string[], order: SortOrder, limit: number, offset: number, search: string | undefined = undefined): Promise<DataModel[]>
{
    const defaultQuery: RecordQuery = { id: { NOT_IN: ids } };
    const searchQuery: RecordQuery = {
        'OR': [
            { fullName: { CONTAINS: search } },
            { nickname: { CONTAINS: search } }
        ]
    };

    const sortField = order === SortOrders.POPULAR ? 'popularity' : 'joinedAt';

    const query: QueryStatement = search !== undefined ? { ...defaultQuery, ...searchQuery } : defaultQuery;
    const recordSort: RecordSort = { [sortField]: SortDirections.ASCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, recordSort, limit, offset) as Promise<DataModel[]>;
}
