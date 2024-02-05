
import type Requester from '../authentication/Requester';

import retrieveCreatorsWithout from '../creator/data/retrieveWithout';
import createCreatorView from '../creator/view/createView';

import RelationView from './view/RelationView';
import retrieveDataByFollower from './data/retrieveByFollower';

export default async function explore(requester: Requester): Promise<RelationView[]>
{
    const followerData = await retrieveDataByFollower(requester.id);
    const followingIds = followerData.map(data => data.followingId);

    const creatorData = await retrieveCreatorsWithout(followingIds);
    const creatorViews = await Promise.all(creatorData.map(data => createCreatorView(data)));

    return creatorViews.map(creatorView => new RelationView(undefined, undefined, creatorView));
}
