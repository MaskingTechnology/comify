
import { type Requester } from '@comify/common/security';

import type { Range } from '~/common/validateRange';

import type { Post } from '../definitions';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function (requester: Requester, postId: string, range: Range): Promise<Post[]>
{
    const records = await retrieve(requester.tenantId, postId, range.limit, range.offset);

    const posts = await toModels(requester, records);

    return [...posts.values()];
}
