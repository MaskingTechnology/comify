
import { type RecordQuery, type RecordSort, SortDirections } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (creatorIds: string[], limit: number, offset: number): Promise<Record[]>
{
    const query: RecordQuery<Record> =
    {
        deleted: { 'EQUALS': false },
        parentId: { 'EQUALS': undefined },
        creatorId: { 'IN': creatorIds }
    };

    const sort: RecordSort<Record> = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords<Record>(RECORD_TYPE, query, undefined, sort, limit, offset);
}
