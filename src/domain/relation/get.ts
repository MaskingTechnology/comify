
import retrieve from './data/retrieve';
import type RelationView from './view/RelationView';
import createFollowingView from './view/createView';

export default async function get(followerId: string, followingId: string): Promise<RelationView>
{
    const data = await retrieve(followerId, followingId);

    return createFollowingView(data);
}
