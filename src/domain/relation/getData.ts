
import RelationData from './RelationData';

export default async function getData(followerId: string, followingId: string): Promise<RelationData>
{
    // This function always return a new RelationData instance.
    // The id property is only set for an existing relation.

    return new RelationData(undefined, followerId, followingId);
}
