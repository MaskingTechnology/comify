
import RelationView from './RelationView';
import createView from './createView';
import retrieveByFollowing from './data/retrieveByFollowing';

export default async function getByFollowing(follower: string): Promise<RelationView[]>
{
    const relationData = await retrieveByFollowing(follower);

    return Promise.all(relationData.map(data => createView(data)));
}