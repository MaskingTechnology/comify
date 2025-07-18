
import type { Requester } from '^/domain/authentication';
import type { Range } from '^/domain/common/validateRange';
import validateRange from '^/domain/common/validateRange';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getFollowers from '../getFollowers';

export default async function getFollowersAggregated(requester: Requester, tenant: Tenant, followingId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getFollowers(requester, followingId, range.limit, range.offset);

    return Promise.all(data.map(data => aggregate(tenant, data)));
}
