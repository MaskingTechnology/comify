
import type { Requester } from '^/domain/authentication/types';
import getComicData from '^/domain/comic/getByIdAggregated/feature';
import ratingExists from '^/domain/rating/exists/feature';
import getRelationData from '^/domain/relation/getAggregated/feature';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function feature(requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [creatorData, comicData, hasRated] = await Promise.all([
        getRelationData(requester.id, data.creatorId),
        getComicData(data.comicId),
        ratingExists(requester.id, data.id, undefined),
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        creator: creatorData,
        comic: comicData,
        ratingCount: data.ratingCount,
        reactionCount: data.reactionCount,
        hasRated
    };
}
