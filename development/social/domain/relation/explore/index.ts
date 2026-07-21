
import { type Requester } from '@comify/common/security';

import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';
import retrieveOtherCreators from '~/creator/getOtherIds';

import toModel from '../_toModel';
import type { SortOrder, Relation } from '../definitions';
import retrieveFollowing from '../_retrieveFollowing';

export default async function run(requester: Requester, order: SortOrder, range: Range, search: string | undefined = undefined): Promise<Relation[]>
{
    validateRange(range);

    const followingRecords = await retrieveFollowing(requester.principalId, requester.principalId);
    const followingIds = followingRecords.map(record => record.followingId);
    followingIds.push(requester.principalId);

    const creatorIds = await retrieveOtherCreators(requester, followingIds, range, order, search);

    const records = creatorIds.map(creatorId =>
    {
        return { id: undefined, followerId: requester.principalId, followingId: creatorId };
    });

    return Promise.all(records.map(item => toModel(requester.tenantId, item)));
}
