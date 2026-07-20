
import { type Requester } from '@comify/common/security';
import retrieveRelationsByFollower from '~/relation/_retrieveFollowing';

import type { Record } from '../definitions';

import retrieve from './retrieve';

export default async function run(requester: Requester, limit: number, offset: number): Promise<Record[]>
{
    const relationsData = await retrieveRelationsByFollower(requester.principalId, requester.principalId);

    const excludedCreatorIds = relationsData.map(record => record.followingId);
    excludedCreatorIds.push(requester.principalId);

    return retrieve(requester.tenantId, excludedCreatorIds, limit, offset);
}
