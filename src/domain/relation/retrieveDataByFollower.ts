
import RelationData from './RelationData';

export default async function retrieveDataByFollower(followerId: string): Promise<RelationData[]>
{
    return [
        new RelationData('0', followerId, '1')
    ];
}
