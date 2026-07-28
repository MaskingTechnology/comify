
import { type Requester } from '@comify/common/security';

import type { Post } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieveById';

export default async function (requester: Requester, id: string): Promise<Post>
{
    const record = await retrieve(requester.tenantId, id);

    return toModel(requester, record);
}
