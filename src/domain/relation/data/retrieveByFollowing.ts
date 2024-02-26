
import database from '../../../integrations/database/module';
import type RelationData from './RelationData';
import { RECORD_TYPE } from './constants';
import createRelationData from './createData';

export default async function retrieveByFollowing(followingId: string): Promise<RelationData[]>
{
    const records = await database.searchRecords(RECORD_TYPE, { followingId: { EQUALS: followingId } });

    return Promise.all(records.map(createRelationData));
}
