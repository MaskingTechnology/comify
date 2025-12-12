
import type { Requester } from '~/authentication';
import type { Tenant } from '~/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getMe from '../getMe';

export default async function getMeAggregated(tenant: Tenant, requester: Requester): Promise<AggregatedData>
{
    const data = await getMe(tenant, requester);

    return aggregate(data);
}
