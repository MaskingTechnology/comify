
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getById from '../getById';

export { type AggregatedData };

export default async function getByIdAggregated(tenant: Tenant, requester: Requester, id: string): Promise<AggregatedData>
{
    const data = await getById(tenant.id, id);

    return aggregate(tenant, requester, data);
}
