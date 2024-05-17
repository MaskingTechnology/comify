
import retrieve from './repository/retrieve';
import type RelationView from './view/RelationView';
import createView from './view/createView';

export default async function get(followerId: string, followingId: string): Promise<RelationView>
{
    const data = await retrieve(followerId, followingId);

    return createView(data);
}
