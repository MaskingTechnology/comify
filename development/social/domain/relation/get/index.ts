
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';

import type { Relation } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieve';

export default async function run(tenant: Tenant, requester: Requester, followerId: string, followingId: string): Promise<Relation>
{
    const record = await retrieve(followerId, followingId);

    return toModel(tenant.id, record);
}
