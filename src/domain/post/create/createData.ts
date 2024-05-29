
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(creatorId: string, comicId: string): DataModel
{
    return {
        id: generateId(),
        creatorId,
        comicId,
        createdAt: new Date().toISOString(),
        ratingCount: 0,
        reactionCount: 0
    };
}
