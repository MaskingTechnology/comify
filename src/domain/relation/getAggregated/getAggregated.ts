
import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import get from '../get';

export default async function getAggregated(followerId: string, followingId: string): Promise<AggregatedData>
{
    const data = await get(followerId, followingId);

    return aggregate(data);
}
