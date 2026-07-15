
import retrieveByPost from '../_retrieveByPost';
import type { CountOperation } from '../definitions';
import update from '../_update';

export default async function updateRatings(postId: string, operation: CountOperation): Promise<number>
{
    const data = await retrieveByPost(postId);

    const ratings = operation === 'increase'
        ? data.ratings + 1
        : data.ratings - 1;

    await update(data.id, { ratings });

    return ratings;
}
