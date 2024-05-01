
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import RelationData from './RelationData';

export default async function retrieve(followerId: string, followingId: string): Promise<RelationData>
{
    const query: RecordQuery = {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    return new RelationData(record?.id as string, followerId, followingId);
}
