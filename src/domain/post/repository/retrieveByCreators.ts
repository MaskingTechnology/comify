
import database, { SortDirections, type RecordQuery, type RecordSort } from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToData from './mapToData';

export default async function retrieveByCreators(creatorIds: string[]): Promise<PostData[]>
{
    const query: RecordQuery = { creatorId: { 'IN': creatorIds }, deleted: { 'EQUALS': false } };
    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    const records = await database.searchRecords(RECORD_TYPE, query, undefined, sort);

    const dataList = records.map(record => mapToData(record));

    return Promise.all(dataList);
}
