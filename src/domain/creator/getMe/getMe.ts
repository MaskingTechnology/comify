
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import getById from '../getById';
import type { DataModel } from '../types';

export default async function getMe(requester: Requester, tenant: Tenant): Promise<DataModel>
{
    return getById(requester.id, tenant.id);
}
