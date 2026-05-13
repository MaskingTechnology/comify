
import type { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import type { Range } from '^/domain/common/validateRange';
import validateRange from '^/domain/common/validateRange';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getByCreator from '../getByCreator';

export { type AggregatedData };

export default async function getByCreatorAggregated(tenant: Tenant, requester: Requester, creatorId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getByCreator(creatorId, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(tenant, requester, item));

    return filterResolved(aggregates);
}
