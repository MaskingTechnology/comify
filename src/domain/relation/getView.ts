
import RelationView from './RelationView';
import getData from './getData';
import createView from './createView';

export default async function retrieveView(followerId: string, followingId: string): Promise<RelationView>
{
    const data = await getData(followerId, followingId);

    return createView(data);
}
