
import { Requester } from '^/domain/authentication';
import getOtherCreators from '^/domain/creator/getOthers';

import type { SortOrder } from '../definitions';
import getFollowing from '../getFollowing';
import type { DataModel } from '../types';

export default async function explore(requester: Requester, order: SortOrder, search: string | undefined = undefined, limit: number, offset: number): Promise<DataModel[]>
{
    const followingData = await getFollowing(requester, requester.id);
    const followingIds = followingData.map(data => data.followingId);
    followingIds.push(requester.id);

    const creatorData = await getOtherCreators(followingIds, order, search, limit, offset);

    return creatorData.map(data =>
    {
        return { id: undefined, followerId: requester.id, followingId: data.id };
    });
}
