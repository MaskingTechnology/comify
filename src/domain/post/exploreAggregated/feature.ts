
import type Requester from '^/domain/authentication/Requester';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import explore from '../explore/feature';

export default async function feature(requester: Requester): Promise<AggregatedData[]>
{
    const data = await explore(requester);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
