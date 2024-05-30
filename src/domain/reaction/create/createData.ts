
import { generateId } from '^/integrations/utilities/crypto';

import { DataModel } from '../types';

export default function createData(creatorId: string, postId: string, comicId: string | undefined = undefined, commentId: string | undefined = undefined): DataModel
{
    const id = generateId();
    const createdAt = new Date().toISOString();
    const ratingCount = 0;

    return { id, createdAt, creatorId, postId, comicId, commentId, ratingCount };
}
