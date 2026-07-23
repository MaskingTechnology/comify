
import { type Requester } from '@comify/common/security';
import getComicData from '~/post.comic/getById';
import getCommentData from '~/post.comment/getById';
import getMetrics from '~/post.metrics/getByPost';
import ratingExists from '~/post.rating/exists';
import getRelationData from '~/relation/get';

import type { Record, Post } from '../definitions';

export default async function run(requester: Requester, record: Record): Promise<Post>
{
    const [creatorData, isRated, comicData, commentData, metricsData] = await Promise.all([
        getRelationData(requester, requester.principalId, record.creatorId),
        ratingExists(requester.principalId, record.id),
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
