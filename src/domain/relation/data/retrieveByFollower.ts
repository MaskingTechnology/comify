
import database, { RecordQuery } from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import type RelationData from './RelationData';
import createRelationData from './mapRecord';

export default async function retrieveByFollower(followerId: string): Promise<RelationData[]>
{
    const query: RecordQuery = { followerId: { EQUALS: followerId } };

    const records = await database.searchRecords(RECORD_TYPE, query);

    return Promise.all(records.map(createRelationData));
}
