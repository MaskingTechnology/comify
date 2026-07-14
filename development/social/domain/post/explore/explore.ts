
import type { Requester } from '~/authentication';
import retrieveRelationsByFollower from '~/relation/getFollowing';
import type { Tenant } from '@comify/common/domain/tenant';

import type { BaseData } from '../definitions';
import retrieveData from './retrieveData';

export default async function explore(tenant: Tenant, requester: Requester, limit: number, offset: number): Promise<DataModel[]>
{
    const relationsData = await retrieveRelationsByFollower(requester, requester.id);

    const excludedCreatorIds = relationsData.map(data => data.followingId);
    excludedCreatorIds.push(requester.id);

    return retrieveData(tenant.id, excludedCreatorIds, limit, offset);
}
