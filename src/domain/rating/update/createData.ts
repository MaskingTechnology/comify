
import { generateId } from '^/integrations/utilities/crypto';

import { DataModel } from '../types';

export default function createData(creatorId: string, postId: string | undefined, reactionId: string | undefined): DataModel
{
    const id = generateId();
    const createdAt = new Date().toISOString();

    return { id, creatorId, postId, reactionId, createdAt };
}
