
import { type Requester } from '@comify/common/security';

import getPosts from '~/post/getManyById';
import getRelations from '~/relation/getMany';

import type { Record, Notification } from '../definitions';
import { logger } from '../integrations';

export default async function (requester: Requester, records: Record[]): Promise<Map<string, Notification>>
{
    const relationKeys = new Set(records.map(record => { return { followerId: record.receiverId, followingId: record.senderId }; }));
    const postIds = new Set(records.map(record => record.postId).filter(id => id !== undefined));

    const [relationMap, postMap] = await Promise.all([
        getRelations(requester, [...relationKeys]),
        getPosts(requester, [...postIds])
    ]);

    const map = new Map();

    records.forEach(record =>
    {
        const relation = relationMap.get(`${record.receiverId}:${record.senderId}`);

        if (relation === undefined) return logger.warn(`Relation for notification with id ${record.id} not found`);

        const post = record.postId !== undefined ? postMap.get(record.postId) : undefined;

        map.set(record.id, {
            createdAt: record.createdAt,
            type: record.type,
            relation: relation,
            post: post
        });
    });

    return map;
}
