
import RelationView from './RelationView';
import createFollowerView from './createFollowerView';
import retrieveByFollowing from './data/retrieveByFollowing';

export default async function getFollowers(followingId: string): Promise<RelationView[]>
{
    const relationData = await retrieveByFollowing(followingId);

    return Promise.all(relationData.map(data => createFollowerView(data)));
}
