
import type { Requester } from '~/authentication';
import getComicData from '~/comic/getByIdAggregated';
import getCommentData from '~/comment/getById';
import getMetrics from '~/post.metrics/getByPost';
import ratingExists from '~/rating/exists';
import getRelationData from '~/relation/getAggregated';
import type { Tenant } from '~/tenant';

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
