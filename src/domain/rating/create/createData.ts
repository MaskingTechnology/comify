
import { generateId } from '^/integrations/utilities/crypto';

import { DataModel } from '../types';

export default function createData(creatorId: string, postId: string): DataModel
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        creatorId,
        postId
    };
}
