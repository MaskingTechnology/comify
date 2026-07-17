
import retrieve from '../_retrieveByPost';
import type { CountOperation } from '../definitions';
import update from '../_update';

export default async function updateRatings(postId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(postId);

    const ratings = operation === 'increase'
        ? record.ratings + 1
        : record.ratings - 1;

    await update(record.id, { ratings });

    return ratings;
}
