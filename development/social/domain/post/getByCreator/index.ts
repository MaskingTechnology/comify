
import { type Identifier } from '@comify/common/primitives/identifier';
import { type Range } from '@comify/common/primitives/range';
import validateRange from '@comify/common/primitives/range/validate';
import { type Requester } from '@comify/common/security';

import toModels from '../_toModels';
import { type Post } from '../definitions';

import getByCreator from './retrieve';

export default async function (requester: Requester, creatorId: Identifier, range: Range): Promise<Post[]>
{
    validateRange(range);

    const records = await getByCreator(creatorId, range.limit, range.offset);

    const posts = await toModels(requester, records);

    return posts.values().toArray();
}
