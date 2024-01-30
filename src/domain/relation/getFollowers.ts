
import RelationView from './RelationView';
import createFollowerView from './createFollowerView';
import retrieveByFollowing from './data/retrieveByFollowing';

export default async function getFollowers(followingId: string): Promise<RelationView[]>
{
    const data = await retrieveByFollowing(followingId);

    return Promise.all(data.map(createFollowerView));
}
