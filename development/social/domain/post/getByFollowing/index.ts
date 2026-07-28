
import { type Requester } from '@comify/common/security';

import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';
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

    return [...posts.values()];
}
