
import type { RecordQuery, RecordSort } from '@theshelf/database';
import { SortDirections } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (creatorId: string, limit: number, offset: number): Promise<Record[]>
{
    const query: RecordQuery<Record> =
    {
        deleted: { 'EQUALS': false },
        parentId: { 'EQUALS': undefined },
        creatorId: { 'EQUALS': creatorId }
    };

    const sort: RecordSort<Record> = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords<Record>(RECORD_TYPE, query, undefined, sort, limit, offset);
}
