
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(creatorId: string, comicId?: string, commentId?: string, parentId?: string, tenantId?: string): DataModel
{
    return {
        id: generateId(),
        parentId,
        creatorId,
        tenantId,
        comicId,
        commentId,
        createdAt: new Date().toISOString()
    };
}
