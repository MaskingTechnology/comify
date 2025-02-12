
import { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import validateRange, { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import getRecommended from '../getRecommended';

export default async function getRecommendedAggregated(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getRecommended(requester, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(requester, item));

    return filterResolved(aggregates);
}
