
import type Requester from '../authentication/Requester';

import RelationView from './view/RelationView';
import createFollowerView from './view/createFollowerView';
import retrieveByFollowing from './data/retrieveByFollowing';

export default async function getFollowers(followingId: string, requester?: Requester): Promise<RelationView[]>
{
    const data = await retrieveByFollowing(followingId);

    return Promise.all(data.map(createFollowerView));
}
