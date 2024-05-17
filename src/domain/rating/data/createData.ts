
import { generateId } from '^/integrations/utilities/crypto';

import RatingData from './RatingData';

export default function createData(creatorId: string, postId: string | undefined, reactionId: string | undefined): RatingData
{
    const id = generateId();
    const createdAt = new Date();

    return new RatingData(id, creatorId, postId, reactionId, createdAt);
}
