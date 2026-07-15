
import type { Requester } from '~/authentication';
import retrieveFollowerData from '~/relation/_retrieveFollowing';

import type { Data } from '../definitions';
import retrieveData from './retrieveData';

export default async function getByFollowing(requester: Requester, limit: number, offset: number): Promise<Data[]>
{
    const followerData = await retrieveFollowerData(requester.id, requester.id);

    const creatorIds = followerData.map(data => data.followingId);

    return retrieveData(creatorIds, limit, offset);
}
