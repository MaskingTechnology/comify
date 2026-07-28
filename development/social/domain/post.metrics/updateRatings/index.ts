
import retrieve from '../_retrieveByPost';
import type { CountOperation } from '../definitions';
import { logger } from '../integrations';
import persist from './persist';

export default async function (postId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(postId);

    const ratings = operation === 'increase'
        ? record.ratings + 1
        : record.ratings - 1;

    const succeeded = await persist(record.id, ratings);

    if (succeeded === false)
    {
        logger.warn(`Rating count for post metrics with id '${record.id}' has not been updated.`);
    }

    return ratings;
}
