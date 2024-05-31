
import { Requester } from '^/domain/authentication/types';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import retrieveByFollower from '../getFollowing/feature';

export default async function feature(requester: Requester, followerId: string): Promise<AggregatedData[]>
{
    const data = await retrieveByFollower(requester, followerId);

    return Promise.all(data.map(aggregate));
}
