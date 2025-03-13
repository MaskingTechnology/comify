
import type { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import type { Range } from '^/domain/common/validateRange';
import validateRange from '^/domain/common/validateRange';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import explore from '../explore';

export default async function exploreAggregated(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await explore(requester, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(requester, item));

    return filterResolved(aggregates);
}
