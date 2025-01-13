
import aggregate, { AggregatedData } from '../aggregate';
import get from '../get';

export default async function getAggregated(followerId: string, followingId: string): Promise<AggregatedData>
{
    const data = await get(followerId, followingId);

    return aggregate(data);
}
