
import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import get from '../get/feature';

export default async function feature(followerId: string, followingId: string): Promise<AggregatedData>
{
    const data = await get(followerId, followingId);

    return aggregate(data);
}
