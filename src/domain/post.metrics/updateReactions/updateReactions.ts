
import getByPost from '../getByPost';
import type { CountOperation } from '../types';
import update from '../update';

export default async function updateReactionCount(postId: string, operation: CountOperation): Promise<number>
{
    const data = await getByPost(postId);

    const reactions = operation === 'increase'
        ? data.reactions + 1
        : data.reactions - 1;

    await update(data.id, { reactions });

    return reactions;
}
