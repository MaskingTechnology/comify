
import type { Requester } from '~/authentication';
import retrieveFollowerData from '~/relation/getFollowing';

import type { BaseData } from '../definitions';
import retrieveData from './retrieveData';

export default async function getByFollowing(requester: Requester, limit: number, offset: number): Promise<DataModel[]>
{
    const followerData = await retrieveFollowerData(requester, requester.id);

    const creatorIds = followerData.map(data => data.followingId);

    return retrieveData(creatorIds, limit, offset);
}
