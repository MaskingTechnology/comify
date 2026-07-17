
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../definitions';

export default function createRecord(tenantId: string, creatorId: string, comicId?: string, commentId?: string, parentId?: string): Record
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
