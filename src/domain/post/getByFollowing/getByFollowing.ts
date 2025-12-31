
import type { Requester } from '^/domain/authentication';
import retrieveFollowerData from '^/domain/relation/getFollowing';

import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function getByFollowing(requester: Requester, limit: number, offset: number): Promise<DataModel[]>
{
    const followerData = await retrieveFollowerData(requester, requester.id);

    const creatorIds = followerData.map(data => data.followingId);

    return retrieveData(creatorIds, limit, offset);
}
