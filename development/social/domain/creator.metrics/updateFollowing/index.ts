
import type { CountOperation } from '../definitions';
import { logger } from '../integrations';
import retrieve from '../_retrieveByCreator';
import persist from './persist';

export default async function (creatorId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(creatorId);

    const following = operation === 'increase'
        ? record.following + 1
        : record.following - 1;

    const succeeded = await persist(record.id, following);

    if (succeeded === false)
    {
        logger.warn(`Following count for creator metrics with id '${record.id}' has not been updated.`);
    }

    return following;
}
