
import type { Requester } from '^/domain/authentication/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getAll from '../getAll/feature';

export default async function feature(requester: Requester): Promise<AggregatedData[]>
{
    const data = await getAll(requester);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
