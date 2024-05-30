
import type Requester from '^/domain/authentication/Requester';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getFollowers from '../getFollowers/feature';

export default async function feature(requester: Requester, followingId: string): Promise<AggregatedData[]>
{
    const data = await getFollowers(requester, followingId);

    return Promise.all(data.map(aggregate));
}
