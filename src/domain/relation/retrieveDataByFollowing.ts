
import RelationData from './RelationData';

export default async function retrieveDataByFollower(followingId: string): Promise<RelationData[]>
{
    return [
        new RelationData('0', '1', followingId)
    ];
}
