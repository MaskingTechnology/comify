
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';

import type { Relation } from '../definitions';
import toModel from '../_toModel';
import get from '../_retrieve';

export default async function run(tenant: Tenant, requester: Requester, followerId: string, followingId: string): Promise<Relation>
{
    const data = await get(followerId, followingId);

    return toModel(tenant.id, data);
}
