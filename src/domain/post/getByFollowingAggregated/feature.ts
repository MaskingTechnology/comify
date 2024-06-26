
import type { Requester } from '^/domain/authentication/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByFollowing from '../getByFollowing/feature';

export default async function feature(requester: Requester): Promise<AggregatedData[]>
{
    const data = await getByFollowing(requester);

    return Promise.all(data.map(item => aggregate(requester, item)));
}
