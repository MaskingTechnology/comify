
import type Requester from '../authentication/Requester';

import type RelationView from './view/RelationView';
import createFollowingView from './view/createFollowingView';
import retrieve from './data/retrieve';

export default async function get(followerId: string, followingId: string, requester?: Requester): Promise<RelationView>
{
    const data = await retrieve(followerId, followingId);

    return createFollowingView(data);
}
