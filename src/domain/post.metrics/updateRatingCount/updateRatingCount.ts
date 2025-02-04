
import getByPost from '../getByPost';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateRatingCount(postId: string, operation: CountOperation): Promise<number>
{
    const data = await getByPost(postId);

    const ratingCount = operation === 'increase'
        ? data.ratingCount + 1
        : data.ratingCount - 1;

    await update(data.id, { ratingCount });

    return ratingCount;
}
