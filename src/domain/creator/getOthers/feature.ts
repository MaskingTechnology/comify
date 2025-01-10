
import database, { QueryStatement, RecordQuery, RecordSort, SortDirections } from '^/integrations/database/module';

import { RECORD_TYPE, SortOrder, SortOrders } from '../definitions';
import type { DataModel } from '../types';

export default async function feature(ids: string[], order: SortOrder, search: string | undefined = undefined, limit: number, offset: number): Promise<DataModel[]>
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
