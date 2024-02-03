
import type Requester from '../../authentication/Requester';

import RelationData from './RelationData';

export default async function retrieve(followerId: string, followingId: string, requester?: Requester): Promise<RelationData>
{
    // Always return a new instance of RelationData, even if it doesn't exist in the database.
    return new RelationData(undefined, followerId, followingId);
}
