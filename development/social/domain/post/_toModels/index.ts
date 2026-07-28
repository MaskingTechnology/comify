
import { type Requester } from '@comify/common/security';

import getComics from '~/post.comic/getManyById';
import getComments from '~/post.comment/getManyById';
import getMetrics from '~/post.metrics/getMany';
import ratingsExists from '~/post.rating/existsMany';
import getRelations from '~/relation/getMany';

import type { Record, Post } from '../definitions';
import { logger } from '../integrations';

export default async function run(requester: Requester, records: Record[]): Promise<Map<string, Post>>
{
    const relationKeys = new Set(records.map(record => { return { followerId: requester.principalId, followingId: record.creatorId }; }));
    const ratingKeys = new Set(records.map(record => { return { creatorId: requester.principalId, postId: record.id }; }));
    const postIds = new Set(records.map(record => record.id));
    const commentIds = new Set(records.map(record => record.commentId).filter(id => id !== undefined));
    const comicIds = new Set(records.map(record => record.comicId).filter(id => id !== undefined));

    const [creatorMap, isRatedMap, comicMap, commentMap, metricsMap] = await Promise.all([
        getRelations(requester, [...relationKeys]),
        ratingsExists([...ratingKeys]),
        getComics([...comicIds]),
        getComments([...commentIds]),
        getMetrics([...postIds])
    ]);

    const map = new Map();

    records.forEach(record =>
    {
        const creator = creatorMap.get(record.creatorId);
        const comic = record.comicId !== undefined ? comicMap.get(record.comicId) : undefined;
        const comment = record.commentId !== undefined ? commentMap.get(record.commentId) : undefined;
        const isRated = isRatedMap.get(record.id);
        const metrics = metricsMap.get(record.id);

        if (creator === undefined) return logger.warn(`Creator for post with id ${record.id} not found`);
        if (record.comicId !== undefined && comic === undefined) return logger.warn(`Comic for post with id ${record.id} not found`);
        if (record.commentId !== undefined && comment === undefined) return logger.warn(`Comment for post with id ${record.id} not found`);
        if (isRated === undefined) return logger.warn(`Rating for post with id ${record.id} not found`);
        if (metrics === undefined) return logger.warn(`Metrics for post with id ${record.id} not found`);

        map.set(record.id, {
            id: record.id,
            createdAt: record.createdAt,
            hasParent: record.parentId !== undefined,
            parentId: record.parentId,
            creator,
            comic,
            comment,
            metrics,
            isRated
        });
    });

    return map;
}
