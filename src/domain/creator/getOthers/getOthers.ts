
import type { QueryStatement, RecordQuery, RecordSort } from '@theshelf/database';
import database, { SortDirections } from '@theshelf/database';

import type { SortOrder } from '../definitions';
import { RECORD_TYPE, SortOrders } from '../definitions';
import type { DataModel } from '../types';

export default async function getOthers(tenantId: string, ids: string[], order: SortOrder, limit: number, offset: number, search: string | undefined = undefined): Promise<DataModel[]>
{
    const defaultQuery: RecordQuery = {
        AND: [
            { tenantId: { EQUALS: tenantId } },
            { id: { NOT_IN: ids } }
        ]
    };
    const searchQuery: RecordQuery = {
        OR: [
            { fullName: { CONTAINS: search } },
            { nickname: { CONTAINS: search } }
        ]
    };

    const sortField = order === SortOrders.POPULAR ? 'popularity' : 'joinedAt';

    const query: QueryStatement = search !== undefined ? { ...defaultQuery, ...searchQuery } : defaultQuery;
    const recordSort: RecordSort = { [sortField]: SortDirections.ASCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, recordSort, limit, offset) as Promise<DataModel[]>;
}
