
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import type { SortOrder } from '../definitions';
import explore from '../explore';

export default async function exploreAggregated(requester: Requester, order: SortOrder, search: string | undefined = undefined, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await explore(requester, order, search, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(item)));
}
