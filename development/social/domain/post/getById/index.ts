
import type { Requester } from '~/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Post } from '../definitions';
import aggregate from '../_toModel';
import getById from '../_retrieveById';

export default async function run(tenant: Tenant, requester: Requester, id: string): Promise<Post>
{
    const data = await getById(tenant.id, id);

    return aggregate(tenant, requester, data);
}
