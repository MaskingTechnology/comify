
import retrieve from '../_retrieveByPost';
import type { CountOperation } from '../definitions';
import { logger } from '../integrations';
import persist from './persist';

export default async function (postId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(postId);

    const reactions = operation === 'increase'
        ? record.reactions + 1
        : record.reactions - 1;

    const succeeded = await persist(record.id, reactions);

    if (succeeded === false)
    {
        logger.warn(`Reaction count for post metrics with id '${record.id}' has not been updated.`);
    }

    return reactions;
}
