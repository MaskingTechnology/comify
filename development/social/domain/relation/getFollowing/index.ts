
import type { Requester } from '~/authentication';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Relation } from '../definitions';
import toModel from '../_toModel';
import retrieveByFollower from '../_retrieveFollowing';

export default async function run(tenant: Tenant, requester: Requester, followerId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const records = await retrieveByFollower(requester.id, followerId, range.limit, range.offset);

    return Promise.all(records.map(item => toModel(tenant.id, item)));
}
