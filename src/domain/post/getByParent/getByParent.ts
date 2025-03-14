
import type { RecordQuery, RecordSort} from '^/integrations/database';
import database, { SortDirections } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getByParent(parentId: string, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        parentId: { 'EQUALS': parentId },
        deleted: { 'EQUALS': false }
    };

    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, undefined, sort, limit, offset) as Promise<DataModel[]>;
}
