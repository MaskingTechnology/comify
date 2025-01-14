
import { Requester } from '^/domain/authentication';
import filterResolved from '^/domain/common/filterResolved';
import validateRange, { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import getByCreator from '../getByCreator';

export { type AggregatedData };

export default async function getByCreatorAggregated(requester: Requester, creatorId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getByCreator(creatorId, range.limit, range.offset);

    const aggregates = data.map(item => aggregate(requester, item));

    return filterResolved(aggregates);
}
