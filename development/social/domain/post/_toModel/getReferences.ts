
import { type Requester } from '@comify/common/security';

import getComic from '~/post.comic/getById';
import getComment from '~/post.comment/getById';
import getMetrics from '~/post.metrics/get';
import ratingExists from '~/post.rating/exists';
import getRelation from '~/relation/get';

import { type Record } from '../definitions';

import { type References } from './definitions';

export default async function (requester: Requester, record: Record): Promise<References>
{
    const [relation, isRated, comic, comment, metrics] = await Promise.all([
        getRelation(requester, { followerId: requester.principalId, followingId: record.creatorId }),
        ratingExists({ creatorId: requester.principalId, postId: record.id }),
        record.comicId ? getComic(record.comicId) : Promise.resolve(undefined),
        record.commentId ? getComment(record.commentId) : Promise.resolve(undefined),
        getMetrics(record.id)
    ]);

    return { relation, isRated, comic, comment, metrics };
}
