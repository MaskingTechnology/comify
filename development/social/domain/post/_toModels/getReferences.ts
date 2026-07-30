
import { type Requester } from '@comify/common/security';

import getComics from '~/post.comic/getManyById';
import getComments from '~/post.comment/getManyById';
import getMetrics from '~/post.metrics/getMany';
import getRelations from '~/relation/getMany';
import ratingsExists from '~/post.rating/existsMany';

import type { Record } from '../definitions';

import type { References } from './definitions';

export default async function (requester: Requester, records: Record[]): Promise<References>
{
    const postIds = Array.from(new Set(records.map(record => record.id)));
    const creatorIds = Array.from(new Set(records.map(record => record.creatorId)));

    const relationKeys = Array.from(new Set(creatorIds.map(creatorId => { return { followerId: requester.principalId, followingId: creatorId }; })));
    const ratingKeys = Array.from(new Set(records.map(record => { return { creatorId: requester.principalId, postId: record.id }; })));

    const commentIds = Array.from(new Set(records.map(record => record.commentId).filter(id => id !== undefined)));
    const comicIds = Array.from(new Set(records.map(record => record.comicId).filter(id => id !== undefined)));

    const [relationMap, isRatedMap, comicMap, commentMap, metricsMap] = await Promise.all([
        getRelations(requester, relationKeys),
        ratingsExists(ratingKeys),
        getComics(comicIds),
        getComments(commentIds),
        getMetrics(postIds)
    ]);

    return { relationMap, isRatedMap, comicMap, commentMap, metricsMap };
}
