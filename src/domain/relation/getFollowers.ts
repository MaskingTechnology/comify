
import type Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import retrieveByFollowing from './data/retrieveByFollowing';
import type RelationView from './view/RelationView';
import createView from './view/createView';

export default async function getFollowers(requester: Requester, followingId: string): Promise<RelationView[]>
{
    const data = await retrieveByFollowing(followingId);
    const relationData = await Promise.all(data.map(data => retrieve(requester.id, data.followerId)));

    return Promise.all(relationData.map(createView));
}
