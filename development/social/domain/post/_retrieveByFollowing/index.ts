
import { type Requester } from '@comify/common/security';
import retrieveFollowerData from '~/relation/_retrieveFollowing';

import type { Record } from '../definitions';

import retrieve from './retrieve';

export default async function run(requester: Requester, limit: number, offset: number): Promise<Record[]>
{
    const followerData = await retrieveFollowerData(requester.principalId, requester.principalId);

    const creatorIds = followerData.map(record => record.followingId);

    return retrieve(creatorIds, limit, offset);
}
