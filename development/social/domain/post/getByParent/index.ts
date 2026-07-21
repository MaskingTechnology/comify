
import { type Requester } from '@comify/common/security';
import filterResolved from '~/common/filterResolved';
import type { Range } from '~/common/validateRange';

import type { Post } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function run(requester: Requester, postId: string, range: Range): Promise<Post[]>
{
    const records = await retrieve(requester.tenantId, postId, range.limit, range.offset);

    const posts = records.map(item => toModel(requester, item));

    return filterResolved(posts);
}
