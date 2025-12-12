
import type { Requester } from '~/authentication';
import filterResolved from '~/common/filterResolved';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';
import type { Tenant } from '~/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getRecommended from '../getRecommended';

export default async function getRecommendedAggregated(tenant: Tenant, requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getRecommended(tenant.id, requester.id, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(tenant, requester, item));

    return filterResolved(aggregates);
}
