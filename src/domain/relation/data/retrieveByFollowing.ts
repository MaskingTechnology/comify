
import RelationData from './RelationData';

export default async function retrieveFollowing(followingId: string): Promise<RelationData[]>
{
    return [
        new RelationData('0', '1', followingId)
    ];
}
