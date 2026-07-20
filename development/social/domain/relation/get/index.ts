
import { type Requester } from '@comify/common/security';

import type { Relation } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieve';

export default async function run(requester: Requester, followerId: string, followingId: string): Promise<Relation>
{
    const record = await retrieve(followerId, followingId);

    return toModel(requester.tenantId, record);
}
