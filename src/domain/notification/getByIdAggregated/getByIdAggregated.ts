
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getById from '../getById';

export default async function getByIdAggregated(requester: Requester, tenant: Tenant, id: string): Promise<AggregatedData>
{
    const data = await getById(id);

    return aggregate(requester, tenant, data);
}
