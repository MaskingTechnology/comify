
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(creatorId: string, postId: string): Data
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        creatorId,
        postId
    };
}
