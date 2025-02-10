
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';

import aggregate, { AggregatedData } from '../aggregate';
import type { SortOrder } from '../definitions';
import explore from '../explore';

export default async function exploreAggregated(requester: Requester, order: SortOrder, range: Range, search: string | undefined = undefined): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await explore(requester, order, range.limit, range.offset, search);

    return Promise.all(data.map(item => aggregate(item)));
}
