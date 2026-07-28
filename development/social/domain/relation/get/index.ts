
import { type Requester } from '@comify/common/security';

import type { RelationKey, Relation } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieve';

export default async function (requester: Requester, key: RelationKey): Promise<Relation>
{
    const record = await retrieve(key.followerId, key.followingId);

    return toModel(requester.tenantId, record);
}
