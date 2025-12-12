
import type { Requester } from '~/authentication';
import type { Tenant } from '~/tenant';

import getById from '../getById';
import type { DataModel } from '../types';

export default async function getMe(tenant: Tenant, requester: Requester): Promise<DataModel>
{
    return getById(tenant.id, requester.id);
}
