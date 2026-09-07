
import { type Requester } from '@comify/common/security';

import { type Record, type Post } from '../definitions';
import { logger } from '../integrations';

import { type References } from './definitions';

export default function (requester: Requester, records: Record[], references: References): Map<string, Post>
{
    const { relationMap, isRatedMap, comicMap, commentMap, metricsMap } = references;

    const map = new Map();

    records.forEach(record =>
    {
        const { id, parentId } = record;

        const hasParent = parentId !== undefined;
        const createdAt = new Date(record.createdAt);

        const comicId = record.comicId ?? '';
        const commentId = record.commentId ?? '';
        const relationKey = `${requester.principalId}:${record.creatorId}`;
        const ratingKey = `${requester.principalId}:${record.id}`;

        const creator = relationMap.get(relationKey);
        const comic = comicMap.get(comicId);
        const comment = commentMap.get(commentId);
        const isRated = isRatedMap.get(ratingKey);
        const metrics = metricsMap.get(id);

        if (creator === undefined) return logger.warn(`Creator for post with id ${record.id} not found`);
        if (record.comicId !== undefined && comic === undefined) return logger.warn(`Comic for post with id ${record.id} not found`);
        if (record.commentId !== undefined && comment === undefined) return logger.warn(`Comment for post with id ${record.id} not found`);
        if (isRated === undefined) return logger.warn(`Rating for post with id ${record.id} not found`);
        if (metrics === undefined) return logger.warn(`Metrics for post with id ${record.id} not found`);

        const post: Post = { id, createdAt, hasParent, parentId, creator, comic, comment, metrics, isRated };

        map.set(record.id, post);
    });

    return map;
}
