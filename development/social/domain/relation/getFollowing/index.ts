
import type { Requester } from '~/authentication';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Relation } from '../definitions';
import aggregate from '../_toModel';
import retrieveByFollower from '../_retrieveFollowing';

export default async function run(tenant: Tenant, requester: Requester, followerId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const data = await retrieveByFollower(requester.id, followerId, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(tenant.id, item)));
}
