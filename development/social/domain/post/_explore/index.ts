
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import retrieveRelationsByFollower from '~/relation/_retrieveFollowing';

import type { Record } from '../definitions';

import retrieve from './retrieve';

export default async function run(tenant: Tenant, requester: Requester, limit: number, offset: number): Promise<Record[]>
{
    const relationsData = await retrieveRelationsByFollower(requester.id, requester.id);

    const excludedCreatorIds = relationsData.map(record => record.followingId);
    excludedCreatorIds.push(requester.id);

    return retrieve(tenant.id, excludedCreatorIds, limit, offset);
}
