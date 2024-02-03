
import type Requester from '../authentication/Requester';

import RelationView from './view/RelationView';
import createFollowingView from './view/createFollowingView';
import retrieveByFollower from './data/retrieveByFollower';

export default async function getFollowing(followerId: string, requester?: Requester): Promise<RelationView[]>
{
    const data = await retrieveByFollower(followerId);

    return Promise.all(data.map(createFollowingView));
}
