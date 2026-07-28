
import { type Requester } from '@comify/common/security';

import validateRange, { type Range } from '~/common/validateRange';
import retrieveRelationsByFollower from '~/relation/_retrieveFollowing';

import type { Post } from '../definitions';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function (requester: Requester, range: Range): Promise<Post[]>
{
    validateRange(range);

    const relationsData = await retrieveRelationsByFollower(requester.principalId, requester.principalId);

    const excludedCreatorIds = relationsData.map(record => record.followingId);
    excludedCreatorIds.push(requester.principalId);

    const records = await retrieve(requester.tenantId, excludedCreatorIds, range.limit, range.offset);

    const posts = await toModels(requester, records);

    return [...posts.values()];
}
