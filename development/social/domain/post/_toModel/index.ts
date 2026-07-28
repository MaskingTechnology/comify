
import { type Requester } from '@comify/common/security';
import getComic from '~/post.comic/getById';
import getComment from '~/post.comment/getById';
import getMetrics from '~/post.metrics/get';
import ratingExists from '~/post.rating/exists';
import getRelation from '~/relation/get';

import type { Record, Post } from '../definitions';

export default async function run(requester: Requester, record: Record): Promise<Post>
{
    const [creator, isRated, comic, comment, metrics] = await Promise.all([
        getRelation(requester, { followerId: requester.principalId, followingId: record.creatorId }),
        ratingExists({ creatorId: requester.principalId, postId: record.id }),
        record.comicId ? getComic(record.comicId) : Promise.resolve(undefined),
        record.commentId ? getComment(record.commentId) : Promise.resolve(undefined),
        getMetrics(record.id)
    ]);

    return {
        id: record.id,
        createdAt: record.createdAt,
        creator: creator,
        comic: comic,
        comment: comment,
        parentId: record.parentId,
        hasParent: record.parentId !== undefined,
        metrics: metrics,
        isRated
    };
}
