
import getByPost from '../getByPost';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateReactionCount(postId: string, operation: CountOperation): Promise<number>
{
    const data = await getByPost(postId);

    const reactionCount = operation === 'increase'
        ? data.reactionCount + 1
        : data.reactionCount - 1;

    await update(data.id, { reactionCount });

    return reactionCount;
}
