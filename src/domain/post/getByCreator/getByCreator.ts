
import type { RecordQuery, RecordSort} from '^/integrations/database';
import database, { SortDirections } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getByCreator(creatorId: string, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        deleted: { 'EQUALS': false },
        parentId: { 'EQUALS': undefined },
        creatorId: { 'EQUALS': creatorId }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
