
import getOtherCreators from '~/creator/_retrieveOthers';

import type { SortOrder, Data } from '../definitions';
import getFollowing from '../_retrieveFollowing';

export default async function run(tenantId: string, requesterId: string, order: SortOrder, limit: number, offset: number, search: string | undefined = undefined): Promise<Data[]>
{
    const followingData = await getFollowing(requesterId, requesterId);
    const followingIds = followingData.map(data => data.followingId);
    followingIds.push(requesterId);

    const creatorData = await getOtherCreators(tenantId, followingIds, order, limit, offset, search);

    return creatorData.map(data =>
    {
        return { id: undefined, followerId: requesterId, followingId: data.id };
    });
}
