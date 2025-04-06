
import type { Requester } from '^/domain/authentication';
import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import get from '../get';

export default async function getAggregated(requester: Requester, followerId: string, followingId: string): Promise<AggregatedData>
{
    const data = await get(followerId, followingId);

    return aggregate(requester, data);
}
