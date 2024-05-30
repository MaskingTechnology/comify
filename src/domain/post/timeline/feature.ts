
import type Requester from '^/domain/authentication/Requester';
import retrieveFollowerData from '^/domain/relation/getFollowing/feature';

import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function feature(requester: Requester): Promise<DataModel[]>
{
    const followerData = await retrieveFollowerData(requester, requester.id);

    const creatorIds = followerData.map(data => data.followingId);

    return retrieveData(creatorIds);
}
