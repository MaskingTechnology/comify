
import { generateId } from '^/integrations/utilities/crypto';

import { DataModel } from '../types';

export default function createData(creatorId: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined): DataModel
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        creatorId,
        postId,
        reactionId
    };
}
