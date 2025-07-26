
import getCreatorData from '^/domain/creator/getByIdAggregated';
import type { Tenant } from '^/domain/tenant';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(tenant: Tenant, data: DataModel): Promise<AggregatedData>
{
    const followingData = await getCreatorData(tenant.id, data.followingId);

    return {
        id: data.id,
        following: followingData,
        established: data.id !== undefined,
        self: data.followerId === data.followingId
    };
}
