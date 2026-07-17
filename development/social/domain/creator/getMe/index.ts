
import type { Requester } from '~/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Creator } from '../definitions';
import toModel from '../_toModel';
import retrieveById from '../_retrieveById';

export default async function getMe(tenant: Tenant, requester: Requester): Promise<Creator>
{
    const record = await retrieveById(tenant.id, requester.id);

    return toModel(record);
}
