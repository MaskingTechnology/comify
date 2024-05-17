
import RelationData from './RelationData';

export default function createDataWithoutId(followerId: string, followingId: string): RelationData
{
    return new RelationData(undefined, followerId, followingId);
}
