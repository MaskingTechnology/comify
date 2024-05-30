
import type Requester from '^/domain/authentication/Requester';
import getOtherCreators from '^/domain/creator/getOthers/feature';

import getFollowing from '../getFollowing/feature';

import type { SortOrder } from '../definitions';
import type { DataModel } from '../types';

export default async function feature(requester: Requester, order: SortOrder, search: string | undefined = undefined): Promise<DataModel[]>
{
    const followingData = await getFollowing(requester, requester.id);
    const followingIds = followingData.map(data => data.followingId);
    followingIds.push(requester.id);

    const creatorData = await getOtherCreators(followingIds, order, search);

    return creatorData.map(data =>
    {
        return { id: undefined, followerId: requester.id, followingId: data.id };
    });
}
