
import type Requester from '^/domain/authentication/Requester';
import retrieveFollowerData from '^/domain/relation/data/retrieveByFollower';

import aggregate, { AggregatedData } from '../aggregate/feature';
import retrieveData from './retrieveData';

export { type AggregatedData };

export default async function feature(requester: Requester): Promise<AggregatedData[]>
{
    const followerData = await retrieveFollowerData(requester.id);

    const followingIds = followerData.map(data => data.followingId);

    const data = await retrieveData(followingIds);

    const aggregates = data.map(item => aggregate(requester, item));

    return Promise.all(aggregates);
}
