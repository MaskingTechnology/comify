
import type Requester from '^/domain/authentication/Requester';
import { SortFields as CreatorSortFields } from '^/domain/creator/definitions/SortFields';
import retrieveCreatorsWithout from '^/domain/creator/repository/retrieveWithout';
import createCreatorView from '^/domain/creator/view/createView';

import SortOptions from './definitions/SortOptions';
import retrieveDataByFollower from './repository/retrieveByFollower';
import RelationView from './view/RelationView';

export default async function explore(requester: Requester, sortOption: SortOptions, search: string | undefined = undefined): Promise<RelationView[]>
{
    const followerData = await retrieveDataByFollower(requester.id);
    const followingIds = followerData.map(data => data.followingId);
    followingIds.push(requester.id);

    const sort = sortOption === SortOptions.POPULAR
        ? CreatorSortFields.POPULARITY
        : CreatorSortFields.JOINED_AT;

    const creatorData = await retrieveCreatorsWithout(followingIds, sort, search);

    const creatorViews = await Promise.all(creatorData.map(data => createCreatorView(data)));

    return creatorViews.map(creatorView => 
    {
        const self = requester.id === creatorView.id;

        return new RelationView(undefined, creatorView, self);
    });
}
