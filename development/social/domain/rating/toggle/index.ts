
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';

import retrieve from './retrieve';
import switchOff from './switchOff';
import switchOn from './switchOn';

export default async function run(tenant: Tenant, requester: Requester, postId: string): Promise<boolean>
{
    const record = await retrieve(requester.id, postId);

    return record === undefined
        ? switchOn(tenant.id, requester.id, postId)
        : switchOff(tenant.id, record);
}

export { default as subscribe } from './subscribe';
