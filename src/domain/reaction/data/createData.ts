
import { generateId } from '^/integrations/utilities/crypto';

import ReactionData from '../data/ReactionData';

export default function createData(creatorId: string, postId: string, comicId: string | undefined = undefined, commentId: string | undefined = undefined): ReactionData
{
    const id = generateId();
    const createdAt = new Date();
    const ratingCount = 0;

    return new ReactionData(id, creatorId, postId, comicId, commentId, ratingCount, createdAt);
}
