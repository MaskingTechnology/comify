
import database, { RecordData } from '../../../integrations/database/module';
import RelationData from './RelationData';
import { RECORD_TYPE } from './constants';

export default async function create(followerId: string, followingId: string): Promise<RelationData>
{
    const data: RecordData = { followerId, followingId };
    const relationId = await database.createRecord(RECORD_TYPE, data);

    return new RelationData(relationId, followerId, followingId);
}
