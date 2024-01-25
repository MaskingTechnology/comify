
import filterCreatorData from '../creator/filterData';
import createCreatorView from '../creator/createView';

import RelationView from '../relation/RelationView';
import retrieveRelationsData from '../relation/retrieveDataByFollower';

export default async function relations(): Promise<RelationView[]>
{
    const relationsData = await retrieveRelationsData('0');
    const followingIds = relationsData.map(data => data.followingId);

    const creatorData = await filterCreatorData(followingIds);
    const creatorViews = await Promise.all(creatorData.map(data => createCreatorView(data)));

    return creatorViews.map(creatorView => new RelationView(undefined, creatorView));
}
