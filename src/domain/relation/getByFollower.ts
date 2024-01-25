
import RelationView from './RelationView';
import createView from './createView';
import retrieveByFollower from './data/retrieveByFollower';

export default async function getByFollower(follower: string): Promise<RelationView[]>
{
    const relationData = await retrieveByFollower(follower);

    return Promise.all(relationData.map(data => createView(data)));
}
