
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import getComicData from '~/comic/getById';
import getCommentData from '~/comment/getById';
import getMetrics from '~/post.metrics/getByPost';
import ratingExists from '~/rating/exists';
import getRelationData from '~/relation/get';

import type { Record, Post } from '../definitions';

export default async function run(tenant: Tenant, requester: Requester, record: Record): Promise<Post>
{
    const [creatorData, isRated, comicData, commentData, metricsData] = await Promise.all([
        getRelationData(tenant, requester, requester.id, record.creatorId),
        ratingExists(requester.id, record.id),
        record.comicId ? getComicData(record.comicId) : Promise.resolve(undefined),
        record.commentId ? getCommentData(record.commentId) : Promise.resolve(undefined),
        getMetrics(record.id)
    ]);

    return {
        id: record.id,
        createdAt: record.createdAt,
        creator: creatorData,
        comic: comicData,
        comment: commentData,
        parentId: record.parentId,
        hasParent: record.parentId !== undefined,
        metrics: metricsData,
        isRated
    };
}
