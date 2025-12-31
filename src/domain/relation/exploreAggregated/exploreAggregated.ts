
import type { Requester } from '^/domain/authentication';
import type { Range } from '^/domain/common/validateRange';
import validateRange from '^/domain/common/validateRange';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import type { SortOrder } from '../definitions';
import explore from '../explore';

export default async function exploreAggregated(tenant: Tenant, requester: Requester, order: SortOrder, range: Range, search: string | undefined = undefined): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await explore(tenant, requester, order, range.limit, range.offset, search);

    return Promise.all(data.map(item => aggregate(tenant, item)));
}
