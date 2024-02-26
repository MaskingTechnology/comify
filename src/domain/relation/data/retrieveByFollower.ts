
import database, { RecordQuery } from '../../../integrations/database/module';
import type RelationData from './RelationData';
import { RECORD_TYPE } from './constants';
import createRelationData from './createData';

export default async function retrieveByFollower(followerId: string): Promise<RelationData[]>
{
    const query: RecordQuery = { followerId: { EQUALS: followerId } };

    const records = await database.searchRecords(RECORD_TYPE, query);

    return Promise.all(records.map(createRelationData));
}
