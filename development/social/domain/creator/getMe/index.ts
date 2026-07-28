
import { type Requester } from '@comify/common/security';

import type { Creator } from '../definitions';
import toModel from '../_toModel';
import retrieveById from '../_retrieveById';

export default async function (requester: Requester): Promise<Creator>
{
    const record = await retrieveById(requester.tenantId, requester.principalId);

    return toModel(record);
}
