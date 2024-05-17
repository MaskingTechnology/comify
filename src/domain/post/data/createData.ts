
import { generateId } from '^/integrations/utilities/crypto';

import PostData from './PostData';

export default function createData(creatorId: string, comicId: string,): PostData
{
    const id = generateId();
    const createdAt = new Date();
    const ratingCount = 0;
    const reactionCount = 0;

    return new PostData(id, creatorId, comicId, createdAt, ratingCount, reactionCount);
}
