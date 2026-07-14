
import type { Requester } from '~/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Creator } from '../definitions';
import aggregate from '../_toModel';
import retrieveById from '../_retrieveById';

export default async function getMeAggregated(tenant: Tenant, requester: Requester): Promise<Creator>
{
    const data = await retrieveById(tenant.id, requester.id);

    return aggregate(data);
}
