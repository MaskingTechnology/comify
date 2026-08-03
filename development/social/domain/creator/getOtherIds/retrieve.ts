
import type { QueryStatement, RecordQuery, RecordSort } from '@theshelf/database';
import { SortDirections } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (tenantId: string, ids: string[], limit: number, offset: number, search: string | undefined = undefined): Promise<Record[]>
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

    const query: QueryStatement<Record> = search !== undefined ? { ...defaultQuery, ...searchQuery } : defaultQuery;
    const recordSort: RecordSort<Record> = { joinedAt: SortDirections.ASCENDING };

    return database.searchRecords<Record>(RECORD_TYPE, query, undefined, recordSort, limit, offset);
}
