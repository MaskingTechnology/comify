
import RelationView from './RelationView';
import createFollowingView from './createFollowingView';
import retrieveByFollower from './data/retrieveByFollower';

export default async function getFollowing(followerId: string): Promise<RelationView[]>
{
    const data = await retrieveByFollower(followerId);

    return Promise.all(data.map(createFollowingView));
}
