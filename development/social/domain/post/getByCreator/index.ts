
import { type Requester } from '@comify/common/security';
import filterResolved from '~/common/filterResolved';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import type { Post } from '../definitions';
import toModel from '../_toModel';

import getByCreator from './retrieve';

export default async function run(requester: Requester, creatorId: string, range: Range): Promise<Post[]>
{
    validateRange(range);

    const records = await getByCreator(creatorId, range.limit, range.offset);

    const posts = records.map(item => toModel(requester, item));

    return filterResolved(posts);
}
