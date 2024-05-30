
import type Requester from '^/domain/authentication/Requester';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import type { SortOrder } from '../definitions';
import explore from '../explore/feature';

export default async function feature(requester: Requester, order: SortOrder, search: string | undefined = undefined): Promise<AggregatedData[]>
{
    const data = await explore(requester, order, search);

    return Promise.all(data.map(item => aggregate(item)));
}
