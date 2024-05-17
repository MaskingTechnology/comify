
import database, { SortDirections, type RecordQuery, type RecordSort } from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import createData from './mapToData';

export default async function retrieveByPost(postId: string): Promise<ReactionData[]>
{
    const query: RecordQuery = { postId: { 'EQUALS': postId }, deleted: { 'EQUALS': false } };
    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    const records = await database.searchRecords(RECORD_TYPE, query, undefined, sort);

    const dataList = records.map(record => createData(record));

    return Promise.all(dataList);
}
