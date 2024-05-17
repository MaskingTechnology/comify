
import type Requester from '../authentication/Requester';
import retrieve from './repository/retrieve';
import retrieveByFollower from './repository/retrieveByFollower';
import type RelationView from './view/RelationView';
import createView from './view/createView';

export default async function getFollowing(requester: Requester, followerId: string): Promise<RelationView[]>
{
    const followerData = await retrieveByFollower(followerId);

    const requesterData = await Promise.all(followerData.map(data => retrieve(requester.id, data.followingId)));

    return Promise.all(requesterData.map(createView));
}
