
import type { Requester } from '^/domain/authentication/types';
import retrieveFollowerData from '^/domain/relation/getFollowing/feature';
import type { Range } from '^/domain/types';

import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function feature(requester: Requester, range: Range): Promise<DataModel[]>
{
    const followerData = await retrieveFollowerData(requester, requester.id);

    const creatorIds = followerData.map(data => data.followingId);

    return retrieveData(creatorIds, range.offset, range.limit);
}
