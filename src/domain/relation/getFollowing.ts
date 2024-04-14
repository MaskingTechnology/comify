
import type Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import retrieveByFollower from './data/retrieveByFollower';
import type RelationView from './view/RelationView';
import createView from './view/createView';

export default async function getFollowing(requester: Requester, followerId: string): Promise<RelationView[]>
{
    const data = await retrieveByFollower(followerId);
    const relationData = await Promise.all(data.map(data => retrieve(requester.id, data.followingId)));

    return Promise.all(relationData.map(createView));
}
