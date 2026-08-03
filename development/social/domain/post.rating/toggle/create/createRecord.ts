
import generateId from '@comify/common/primitives/identifier/generate';

import type { Record } from '../../definitions';

export default function (creatorId: string, postId: string): Record
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        creatorId,
        postId
    };
}
