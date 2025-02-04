
import { Requester } from '^/domain/authentication';
import getComicData from '^/domain/comic/getByIdAggregated';
import getCommentData from '^/domain/comment/getById';
import ratingExists from '^/domain/rating/exists';
import getRelationData from '^/domain/relation/getAggregated';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [creatorData, hasRated, comicData, commentData] = await Promise.all([
        getRelationData(requester.id, data.creatorId),
        ratingExists(requester.id, data.id),
        data.comicId ? getComicData(data.comicId) : Promise.resolve(undefined),
        data.commentId ? getCommentData(data.commentId) : Promise.resolve(undefined),
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        creator: creatorData,
        comic: comicData,
        comment: commentData,
        parentId: data.parentId,
        ratingCount: data.ratingCount,
        reactionCount: data.reactionCount,
        hasRated
    };
}
