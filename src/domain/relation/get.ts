
import type RelationView from './RelationView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function get(followerId: string, followingId: string): Promise<RelationView>
{
    const data = await retrieve(followerId, followingId);

    return createView(data);
}
