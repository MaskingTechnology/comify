
import { type Identifier } from '@comify/common/primitives/identifier';
import { type Range } from '@comify/common/primitives/range';
import { type Requester } from '@comify/common/security';

import toModels from '../_toModels';
import { type Post } from '../definitions';

import retrieve from './retrieve';

export default async function (requester: Requester, parentId: Identifier, range: Range): Promise<Post[]>
{
    const records = await retrieve(requester.tenantId, parentId, range.limit, range.offset);

    const posts = await toModels(requester, records);

    return posts.values().toArray();
}
