
import type { Record, Post } from '../definitions';

import type { References } from './definitions';

export default function (record: Record, references: References): Post
{
    const { id, parentId } = record;

    const createdAt = new Date(record.createdAt);

    const { relation: creator, comic, comment, metrics, isRated } = references;

    const hasParent = record.parentId !== undefined;

    return { id, createdAt, creator: creator, comic, comment, parentId, hasParent, metrics, isRated };
}
