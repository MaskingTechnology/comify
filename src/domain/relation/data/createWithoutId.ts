
import RelationData from './RelationData';

export default function createWithoutId(followerId: string, followingId: string): RelationData
{
    return new RelationData(undefined, followerId, followingId);
}
