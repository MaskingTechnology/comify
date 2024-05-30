
import type Requester from '^/domain/authentication/Requester';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getRecent from '../getRecent/feature';

export default async function feature(requester: Requester): Promise<AggregatedData[]>
{
    const data = await getRecent(requester.id);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
