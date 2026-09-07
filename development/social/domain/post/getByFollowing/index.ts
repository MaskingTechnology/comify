
import { type Range } from '@comify/common/primitives/range';
import validateRange from '@comify/common/primitives/range/validate';
import { type Requester } from '@comify/common/security';

import toModels from '../_toModels';
import { type Post } from '../definitions';

import getFollowerIds from './getFollowerIds';
import retrieve from './retrieve';

export default async function (requester: Requester, range: Range): Promise<Post[]>
{
    validateRange(range);

    const followerIds = await getFollowerIds(requester.principalId);

    const records = await retrieve(followerIds, range.limit, range.offset);

    const posts = await toModels(requester, records);

    return posts.values().toArray();
}
