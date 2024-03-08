
import database, { RecordQuery, RecordSort, SortDirections } from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import type PostData from './PostData';
import createData from './mapRecord';

export default async function retrieveByCreators(creatorIds: string[]): Promise<PostData[]>
{
    const query: RecordQuery = { creatorId: { 'IN': creatorIds } };
    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    const records = await database.searchRecords(RECORD_TYPE, query, undefined, sort);

    const dataList = records.map(createData);

    return Promise.all(dataList);
}
