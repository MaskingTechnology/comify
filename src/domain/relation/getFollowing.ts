
import RelationView from './RelationView';
import createFollowingView from './createFollowingView';
import retrieveByFollower from './data/retrieveByFollower';

export default async function getFollowing(followerId: string): Promise<RelationView[]>
{
    const relationData = await retrieveByFollower(followerId);

    return Promise.all(relationData.map(data => createFollowingView(data)));
}
