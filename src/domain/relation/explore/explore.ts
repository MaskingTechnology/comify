
import type { Requester } from '^/domain/authentication';
import getOtherCreators from '^/domain/creator/getOthers';

import type { SortOrder } from '../definitions';
import getFollowing from '../getFollowing';
import type { DataModel } from '../types';

export default async function explore(requester: Requester, order: SortOrder, limit: number, offset: number, search: string | undefined = undefined): Promise<DataModel[]>
{
    const followingData = await getFollowing(requester, requester.id);
    const followingIds = followingData.map(data => data.followingId);
    followingIds.push(requester.id);

    const creatorData = await getOtherCreators(followingIds, order, limit, offset, search, requester.tenantId);

    return creatorData.map(data =>
    {
        return { id: undefined, followerId: requester.id, followingId: data.id };
    });
}
