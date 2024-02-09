
import retrieveByFollowing from './data/retrieveByFollowing';
import RelationView from './view/RelationView';
import createFollowerView from './view/createFollowerView';

export default async function getFollowers(followingId: string): Promise<RelationView[]>
{
    const data = await retrieveByFollowing(followingId);

    return Promise.all(data.map(createFollowerView));
}
