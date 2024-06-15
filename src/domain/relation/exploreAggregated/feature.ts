
import type { Requester } from '^/domain/authentication/types';
import validateRange from '^/domain/common/validateRange/feature';
import { Range } from '^/domain/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import type { SortOrder } from '../definitions';
import explore from '../explore/feature';

export default async function feature(requester: Requester, order: SortOrder, search: string | undefined = undefined, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await explore(requester, order, search, range.limit, range.offset);

    return Promise.all(data.map(item => aggregate(item)));
}
