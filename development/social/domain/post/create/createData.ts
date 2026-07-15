
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(tenantId: string, creatorId: string, comicId?: string, commentId?: string, parentId?: string): Data
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
