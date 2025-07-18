
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import get from '../get';


export default async function getAggregated(requester: Requester, tenant: Tenant, followerId: string, followingId: string): Promise<AggregatedData>
{
    const data = await get(followerId, followingId);

    return aggregate(tenant, data);
}
