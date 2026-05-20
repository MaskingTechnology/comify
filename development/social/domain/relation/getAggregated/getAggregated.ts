
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import get from '../get';

export default async function getAggregated(tenant: Tenant, requester: Requester, followerId: string, followingId: string): Promise<AggregatedData>
{
    const data = await get(followerId, followingId);

    return aggregate(tenant, data);
}
