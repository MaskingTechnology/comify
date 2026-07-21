
import logger from '@comify/common/integrations/logging';

import type { CountOperation } from '../definitions';
import retrieve from '../_retrieveByCreator';
import persist from './persist';

export default async function updateFollowers(creatorId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(creatorId);

    const followers = operation === 'increase'
        ? record.followers + 1
        : record.followers - 1;

    const succeeded = await persist(record.id, followers);

    if (succeeded === false)
    {
        logger.warn(`Followers count for creator metrics with id '${record.id}' has not been updated.`);
    }

    return followers;
}
