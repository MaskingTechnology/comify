
import type { Requester } from '~/authentication';
import getComicData from '~/comic/getById';
import getCommentData from '~/comment/getById';
import getMetrics from '~/post.metrics/getByPost';
import ratingExists from '~/rating/exists';
import getRelationData from '~/relation/get';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Data, Post } from '../definitions';

export default async function aggregate(tenant: Tenant, requester: Requester, data: Data): Promise<Post>
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
