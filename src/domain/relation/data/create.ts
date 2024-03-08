
import database, { RecordData } from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import RelationData from './RelationData';

export default async function create(followerId: string, followingId: string): Promise<RelationData>
{
    const data: RecordData = { followerId, followingId };
    const relationId = await database.createRecord(RECORD_TYPE, data);

    return new RelationData(relationId, followerId, followingId);
}
