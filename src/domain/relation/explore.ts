
import retrieveCreatorsWithout from '../creator/data/retrieveWithout';
import createCreatorView from '../creator/createView';

import RelationView from './RelationView';
import retrieveDataByFollower from './data/retrieveByFollower';

export default async function explore(): Promise<RelationView[]>
{
    const followerData = await retrieveDataByFollower('0');
    const followingIds = followerData.map(data => data.followingId);

    const creatorData = await retrieveCreatorsWithout(...followingIds);
    const creatorViews = await Promise.all(creatorData.map(data => createCreatorView(data)));

    return creatorViews.map(creatorView => new RelationView(undefined, undefined, creatorView));
}
