
import retrieveFollowerData from '^/domain/relation/data/retrieveByFollower';

import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function feature(creatorId: string): Promise<DataModel[]>
{
    const followerData = await retrieveFollowerData(creatorId);

    const creatorIds = followerData.map(data => data.followingId);

    return retrieveData(creatorIds);
}
