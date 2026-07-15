
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';

import getData from './getData';
import switchOff from './switchOff';
import switchOn from './switchOn';

export default async function run(tenant: Tenant, requester: Requester, postId: string): Promise<boolean>
{
    const data = await getData(requester.id, postId);

    return data === undefined
        ? switchOn(tenant.id, requester.id, postId)
        : switchOff(tenant.id, data);
}

export { default as subscribe } from './subscribe';
