
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(creatorId: string, comicId?: string, commentId?: string, parentId?: string): DataModel
{
    return {
        id: generateId(),
        parentId,
        creatorId,
        comicId,
        commentId,
        createdAt: new Date().toISOString()
    };
}
