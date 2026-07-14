
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { BaseData } from '../definitions';

export default function createData(creatorId: string, postId: string): DataModel
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        creatorId,
        postId
    };
}
