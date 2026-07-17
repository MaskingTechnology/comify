
import type { Requester } from '~/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Post } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieveById';

export default async function run(tenant: Tenant, requester: Requester, id: string): Promise<Post>
{
    const record = await retrieve(tenant.id, id);

    return toModel(tenant, requester, record);
}
