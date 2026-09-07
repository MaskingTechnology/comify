
import { type Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import retrieve from '../_retrieveById';
import toModel from '../_toModel';
import { type Post } from '../definitions';

export default async function (requester: Requester, id: Identifier): Promise<Post>
{
    const record = await retrieve(requester.tenantId, id);

    return toModel(requester, record);
}
