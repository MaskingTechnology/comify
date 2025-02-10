
import { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import validateRange, { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import getRecent from '../getRecent';

export default async function getRecentAggregated(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getRecent(requester.id, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(requester, item));

    return filterResolved(aggregates);
}
