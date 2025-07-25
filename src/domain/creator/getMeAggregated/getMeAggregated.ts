
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getMe from '../getMe';

export default async function getMeAggregated(tenant: Tenant, requester: Requester): Promise<AggregatedData>
{
    const data = await getMe(tenant, requester);

    return aggregate(data);
}
