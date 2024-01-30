
import type RelationView from './RelationView';
import createFollowingView from './createFollowingView';
import retrieve from './data/retrieve';

export default async function get(followerId: string, followingId: string): Promise<RelationView>
{
    const data = await retrieve(followerId, followingId);

    return createFollowingView(data);
}
