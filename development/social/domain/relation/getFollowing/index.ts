
import { type Requester } from '@comify/common/security';

import validateRange, { type Range } from '~/common/validateRange';

import retrieveByFollower from '../_retrieveFollowing';
import toModel from '../_toModel';
import { type Relation } from '../definitions';

export default async function run(requester: Requester, followerId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const records = await retrieveByFollower(requester.principalId, followerId, range.limit, range.offset);

    return Promise.all(records.map(item => toModel(requester.tenantId, item)));
}
