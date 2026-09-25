
import { type Requester } from '@comify/common/security';

import retrieve from '../_retrieve';
import toModel from '../_toModel';
import { type RelationKey, type Relation } from '../definitions';

export default async function (requester: Requester, key: RelationKey): Promise<Relation>
{
    const record = await retrieve(key);

    return toModel(requester.tenantId, record);
}
