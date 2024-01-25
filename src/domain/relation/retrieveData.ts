
import RelationData from './RelationData';

export default async function retrieveData(followerId: string, followingId: string): Promise<RelationData>
{
    // Always return a new instance of RelationData, even if it doesn't exist in the database.
    return new RelationData(undefined, followerId, followingId);
}
