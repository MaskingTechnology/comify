
import type { Requester } from '~/authentication';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';
import type { Tenant } from '~/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getFollowers from '../getFollowers';

export default async function getFollowersAggregated(tenant: Tenant, requester: Requester, followingId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getFollowers(requester, followingId, range.limit, range.offset);

    return Promise.all(data.map(data => aggregate(tenant, data)));
}
