
import RelationData from './RelationData';

export default async function retrieveFollower(followerId: string): Promise<RelationData[]>
{
    return [
        new RelationData('0', followerId, '1')
    ];
}
