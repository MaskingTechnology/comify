
import getByPost from '../getByPost';
import type { CountOperation } from '../types';
import update from '../update';

export default async function updateRatings(postId: string, operation: CountOperation): Promise<number>
{
    const data = await getByPost(postId);

    const ratings = operation === 'increase'
        ? data.ratings + 1
        : data.ratings - 1;

    await update(data.id, { ratings });

    return ratings;
}
