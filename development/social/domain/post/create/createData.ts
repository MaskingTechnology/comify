
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(tenantId: string, creatorId: string, comicId?: string, commentId?: string, parentId?: string): DataModel
{
    return {
        id: generateId(),
        tenantId,
        creatorId,
        comicId,
        commentId,
        parentId,
        createdAt: new Date().toISOString()
    };
}
