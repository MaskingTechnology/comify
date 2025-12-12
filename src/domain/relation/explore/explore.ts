
import type { Requester } from '~/authentication';
import getOtherCreators from '~/creator/getOthers';
import type { Tenant } from '~/tenant';

import type { SortOrder } from '../definitions';
import getFollowing from '../getFollowing';
import type { DataModel } from '../types';

export default async function explore(tenant: Tenant, requester: Requester, order: SortOrder, limit: number, offset: number, search: string | undefined = undefined): Promise<DataModel[]>
{
    const followingData = await getFollowing(requester, requester.id);
    const followingIds = followingData.map(data => data.followingId);
    followingIds.push(requester.id);

    const creatorData = await getOtherCreators(tenant.id, followingIds, order, limit, offset, search);

    return creatorData.map(data =>
    {
        return { id: undefined, followerId: requester.id, followingId: data.id };
    });
}
