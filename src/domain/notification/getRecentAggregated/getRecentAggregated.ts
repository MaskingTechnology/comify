
import type { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import type { Range } from '^/domain/common/validateRange';
import validateRange from '^/domain/common/validateRange';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getRecent from '../getRecent';

export default async function getRecentAggregated(requester: Requester, tenant: Tenant, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getRecent(requester.id, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(requester, tenant, item));

    return filterResolved(aggregates);
}
