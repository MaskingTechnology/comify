
import type { QueryStatement, RecordQuery, RecordSort } from '@theshelf/database';
import { SortDirections } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, SortOrders, type Record, type SortOrder } from '../definitions';

export default async function retrieve(tenantId: string, ids: string[], order: SortOrder, limit: number, offset: number, search: string | undefined = undefined): Promise<Record[]>
{
    const defaultQuery: RecordQuery<Record> = {
        AND: [
            { tenantId: { EQUALS: tenantId } },
            { id: { NOT_IN: ids } }
        ]
    };
    const searchQuery: RecordQuery<Record> = {
        OR: [
            { fullName: { CONTAINS: search } },
            { nickname: { CONTAINS: search } }
        ]
    };

    const sortField = order === SortOrders.POPULAR ? 'popularity' : 'joinedAt';

    const query: QueryStatement<Record> = search !== undefined ? { ...defaultQuery, ...searchQuery } : defaultQuery;
    const recordSort: RecordSort<Record> = { [sortField]: SortDirections.ASCENDING };

    return database.searchRecords<Record>(RECORD_TYPE, query, undefined, recordSort, limit, offset);
}
