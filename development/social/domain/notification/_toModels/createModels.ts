
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Record, Notification, Type } from '../definitions';
import { logger } from '../integrations';

import type { References } from './definitions';

export default function (records: Record[], references: References): Map<Identifier, Notification>
{
    const { postMap, relationMap } = references;

    const map = new Map();

    records.forEach(record =>
    {
        const createdAt = new Date(record.createdAt);
        const type = record.type as Type;

        const relationKey = `${record.receiverId}:${record.senderId}`;

        const relation = relationMap.get(relationKey);

        if (relation === undefined)
        {
            return logger.warn(`Relation for notification with id ${record.id} not found`);
        }

        const post = record.postId !== undefined ? postMap.get(record.postId) : undefined;

        if (post === undefined && type !== 'started-following')
        {
            return logger.warn(`Post for notification with id ${record.id} not found`);
        }

        const notification: Notification = { createdAt, type, relation, post };

        map.set(record.id, notification);
    });

    return map;
}
