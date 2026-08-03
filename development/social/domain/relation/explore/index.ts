
import { type Range } from '@comify/common/primitives/range';
import validateRange from '@comify/common/primitives/range/validate';
import { type Requester } from '@comify/common/security';

import retrieveOtherCreators from '~/creator/getOtherIds';

import type { Relation } from '../definitions';
import toModels from '../_toModels';
import retrieveFollowing from '../_retrieveFollowing';

export default async function (requester: Requester, range: Range, search: string | undefined = undefined): Promise<Relation[]>
{
    validateRange(range);

    const followingRecords = await retrieveFollowing(requester.principalId);
    const followingIds = followingRecords.map(record => record.followingId);
    followingIds.push(requester.principalId);

    const creatorIds = await retrieveOtherCreators(requester, followingIds, range, search);

    const records = creatorIds.map(creatorId =>
    {
        return { id: undefined, followerId: requester.principalId, followingId: creatorId };
    });

    const relations = await toModels(requester.tenantId, records);

    return relations.values().toArray();
}
