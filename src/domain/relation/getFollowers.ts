
import type Requester from '../authentication/Requester';
import retrieve from './repository/retrieve';
import retrieveByFollowing from './repository/retrieveByFollowing';
import type RelationView from './view/RelationView';
import createView from './view/createView';

export default async function getFollowers(requester: Requester, followingId: string): Promise<RelationView[]>
{
    const followingData = await retrieveByFollowing(followingId);

    const requesterData = await Promise.all(followingData.map(data => retrieve(requester.id, data.followerId)));

    return Promise.all(requesterData.map(createView));
}
