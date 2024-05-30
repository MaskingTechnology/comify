
import type Requester from '^/domain/authentication/Requester';
import getComicData from '^/domain/comic/getByIdAggregated/feature';
import getCommentData from '^/domain/comment/getById/feature';
import ratingExists from '^/domain/rating/exists/feature';
import getRelationData from '^/domain/relation/getAggregated/feature';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function feature(requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [relationData, hasRated, comicData, commentData] = await Promise.all([
        getRelationData(requester.id, data.creatorId),
        ratingExists(requester.id, undefined, data.id),
        data.comicId ? getComicData(data.comicId) : Promise.resolve(undefined),
        data.commentId ? getCommentData(data.commentId) : Promise.resolve(undefined),
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        ratingCount: data.ratingCount,
        creator: relationData,
        hasRated,
        comic: comicData,
        comment: commentData,
    };
}
