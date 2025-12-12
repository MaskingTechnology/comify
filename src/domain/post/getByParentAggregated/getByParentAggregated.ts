
import type { Requester } from '~/authentication';
import filterResolved from '~/common/filterResolved';
import type { Range } from '~/common/validateRange';
import type { Tenant } from '~/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getByParent from '../getByParent';

export default async function getByParentAggregated(tenant: Tenant, requester: Requester, postId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByParent(tenant.id, postId, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(tenant, requester, item));

    return filterResolved(aggregates);
}
