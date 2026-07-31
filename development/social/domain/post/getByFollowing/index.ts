
import { type Range } from '@comify/common/primitives/range';
import validateRange from '@comify/common/primitives/range/validate';
import { type Requester } from '@comify/common/security';

import retrieveFollowerData from '~/relation/_retrieveFollowing';

import type { Post } from '../definitions';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function (requester: Requester, range: Range): Promise<Post[]>
{
    validateRange(range);

    const followerData = await retrieveFollowerData(requester.principalId, requester.principalId);

    const creatorIds = followerData.map(record => record.followingId);

    const records = await retrieve(creatorIds, range.limit, range.offset);

    const posts = await toModels(requester, records);

    return posts.values().toArray();
}
