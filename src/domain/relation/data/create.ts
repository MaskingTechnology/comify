
import database, { RecordData } from '../../../integrations/database/module';

import RelationData from './RelationData';
import { RECORD_TYPE } from './constants';

export default async function create(followerId: string, followingId: string): Promise<RelationData>
{
    const relationData: RecordData = { followerId, followingId };
    const relationId = await database.createRecord(RECORD_TYPE, relationData);

    return new RelationData(relationId, followerId, followingId);
}
