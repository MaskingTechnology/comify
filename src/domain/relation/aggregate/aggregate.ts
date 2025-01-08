
import getCreatorData from '^/domain/creator/getByIdAggregated';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(data: DataModel): Promise<AggregatedData>
{
    const followingData = await getCreatorData(data.followingId);

    return {
        id: data.id,
        following: followingData,
        established: data.id !== undefined,
        self: data.followerId === data.followingId
    };
}
