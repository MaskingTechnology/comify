
import type { Requester } from '~/authentication';
import retrieveFollowerData from '~/relation/_retrieveFollowing';

import type { Record } from '../definitions';

import retrieve from './retrieve';

export default async function run(requester: Requester, limit: number, offset: number): Promise<Record[]>
{
    const followerData = await retrieveFollowerData(requester.id, requester.id);

    const creatorIds = followerData.map(record => record.followingId);

    return retrieve(creatorIds, limit, offset);
}
