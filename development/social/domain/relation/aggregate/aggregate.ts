
import getCreatorData from '~/creator/getById';
import type { Tenant } from '@comify/common/domain/tenant';

import type { BaseData } from '../definitions';
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
