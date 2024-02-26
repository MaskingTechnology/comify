
import database, { RecordQuery } from '../../../integrations/database/module';
import RelationData from './RelationData';
import { RECORD_TYPE } from './constants';

export default async function retrieve(followerId: string, followingId: string): Promise<RelationData>
{
    const query: RecordQuery = {
        followerId: { EQUALS: followerId },
        followingid: { EQUALS: followingId }
    };

    const relation = await database.findRecord(RECORD_TYPE, query);

    return new RelationData(relation?.id as string, followerId, followingId);
}
