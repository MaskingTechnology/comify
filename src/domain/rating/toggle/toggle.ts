
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import getData from './getData';
import switchOff from './switchOff';
import switchOn from './switchOn';

export default async function toggle(requester: Requester, tenant: Tenant, postId: string): Promise<boolean>
{
    const data = await getData(requester.id, postId);

    return data === undefined
        ? switchOn(tenant.id, requester.id, postId)
        : switchOff(tenant.id, data);
}
