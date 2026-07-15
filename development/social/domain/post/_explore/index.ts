
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import retrieveRelationsByFollower from '~/relation/_retrieveFollowing';

import type { Data } from '../definitions';

import retrieveData from './retrieveData';

export default async function run(tenant: Tenant, requester: Requester, limit: number, offset: number): Promise<Data[]>
{
    const relationsData = await retrieveRelationsByFollower(requester.id, requester.id);

    const excludedCreatorIds = relationsData.map(data => data.followingId);
    excludedCreatorIds.push(requester.id);

    return retrieveData(tenant.id, excludedCreatorIds, limit, offset);
}
