
import { type Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import toModels from '../_toModels';
import { type Post } from '../definitions';

import retrieve from './retrieve';

export default async function (requester: Requester, ids: Identifier[]): Promise<Map<Identifier, Post>>
{
    const records = await retrieve(requester.tenantId, ids);

    return toModels(requester, records);
}
