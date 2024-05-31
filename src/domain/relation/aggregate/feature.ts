
import getCreatorData from '^/domain/creator/getByIdAggregated/feature';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function feature(data: DataModel): Promise<AggregatedData>
{
    const followingData = await getCreatorData(data.followingId);

    return {
        id: data.id,
        following: followingData,
        established: data.id !== undefined,
        self: data.followerId === data.followingId
    };
}
