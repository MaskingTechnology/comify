
import type { Requester } from '^/domain/authentication';
import getComicData from '^/domain/comic/getByIdAggregated';
import getCommentData from '^/domain/comment/getById';
import getMetrics from '^/domain/post.metrics/getByPost';
import ratingExists from '^/domain/rating/exists';
import getRelationData from '^/domain/relation/getAggregated';
import type { Tenant } from '^/domain/tenant';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(tenant: Tenant, requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [creatorData, isRated, comicData, commentData, metricsData] = await Promise.all([
        getRelationData(tenant, requester, requester.id, data.creatorId),
        ratingExists(requester.id, data.id),
        data.comicId ? getComicData(data.comicId) : Promise.resolve(undefined),
        data.commentId ? getCommentData(data.commentId) : Promise.resolve(undefined),
        getMetrics(data.id)
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        creator: creatorData,
        comic: comicData,
        comment: commentData,
        parentId: data.parentId,
        hasParent: data.parentId !== undefined,
        metrics: metricsData,
        isRated
    };
}
