
import type Requester from '../authentication/Requester';
import { SortFields } from '../creator/data/constants';
import retrieveCreatorsWithout from '../creator/data/retrieveWithout';
import createCreatorView from '../creator/view/createView';
import { UiSortFields } from './data/constants';
import retrieveDataByFollower from './data/retrieveByFollower';
import RelationView from './view/RelationView';

export default async function explore(requester: Requester, UiSort: string, search: string | undefined): Promise<RelationView[]>
{
    const followerData = await retrieveDataByFollower(requester.id);
    const followingIds = followerData.map(data => data.followingId);
    followingIds.push(requester.id);

    const sort = UiSort === UiSortFields.POPULAR
        ? SortFields.POPULARITY
        : SortFields.JOINED_AT;

    const creatorData = await retrieveCreatorsWithout(followingIds, sort, search);

    const creatorViews = await Promise.all(creatorData.map(data => createCreatorView(data)));

    return creatorViews.map(creatorView => new RelationView(undefined, undefined, creatorView));
}
