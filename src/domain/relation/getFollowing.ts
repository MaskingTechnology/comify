
import retrieveByFollower from './data/retrieveByFollower';
import type RelationView from './view/RelationView';
import createFollowingView from './view/createFollowingView';

export default async function getFollowing(followerId: string): Promise<RelationView[]>
{
    const data = await retrieveByFollower(followerId);

    return Promise.all(data.map(createFollowingView));
}
