
import { type Requester } from '@comify/common/security';

import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import type { Post } from '../definitions';
import toModels from '../_toModels';

import getByCreator from './retrieve';

export default async function (requester: Requester, creatorId: string, range: Range): Promise<Post[]>
{
    validateRange(range);

    const records = await getByCreator(creatorId, range.limit, range.offset);

    const posts = await toModels(requester, records);

    return posts.values().toArray();
}
