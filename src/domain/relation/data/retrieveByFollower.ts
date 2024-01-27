
import RelationData from './RelationData';

export default async function retrieveByFollower(followerId: string): Promise<RelationData[]>
{
    return [
        new RelationData('0', followerId, '1')
    ];
}
