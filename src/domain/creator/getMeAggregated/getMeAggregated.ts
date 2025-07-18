
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getMe from '../getMe';

export default async function getMeAggregated(requester: Requester, tenant: Tenant): Promise<AggregatedData>
{
    const data = await getMe(requester, tenant);

    return aggregate(data);
}
