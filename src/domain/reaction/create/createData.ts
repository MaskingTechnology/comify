
import { generateId } from '^/integrations/utilities/crypto';

import { DataModel } from '../types';

export default function createData(creatorId: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined, comicId: string | undefined = undefined, commentId: string | undefined = undefined): DataModel
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        creatorId,
        postId,
        reactionId,
        comicId,
        commentId,
        ratingCount: 0,
        reactionCount: 0
    };
}
