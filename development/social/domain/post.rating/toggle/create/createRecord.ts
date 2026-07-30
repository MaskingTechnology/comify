
import { generateId } from '@comify/common/integrations/utilities/crypto';

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
