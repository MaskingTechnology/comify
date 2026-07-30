
import type { CountOperation } from '../definitions';
import { logger } from '../integrations';
import retrieve from '../_retrieveByCreator';

import updateCount from './updateCount';
import persist from './persist';

export default async function (creatorId: string, operation: CountOperation): Promise<void>
{
    const record = await retrieve(creatorId);

    const followers = updateCount(record, operation);

    const succeeded = await persist(record.id, followers);

    if (succeeded === false)
    {
        logger.warn(`Followers count for creator metrics with id '${record.id}' has not been updated.`);
    }
}
