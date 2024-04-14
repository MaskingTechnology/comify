
import database, { RecordQuery, RecordSort, SortDirections } from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import type ReactionData from './ReactionData';
import createData from './mapRecord';

export default async function retrieveByPost(postId: string): Promise<ReactionData[]>
{
    const query: RecordQuery = { postId: { 'EQUALS': postId } };
    const sort: RecordSort = { createdAt: SortDirections.ASCENDING };

    const records = await database.searchRecords(RECORD_TYPE, query, undefined, sort);

    const dataList = records.map(createData);

    return Promise.all(dataList);
}
