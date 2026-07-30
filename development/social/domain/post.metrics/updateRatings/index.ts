
import type { CountOperation } from '../definitions';
import { logger } from '../integrations';
import retrieve from '../_retrieveByPost';

import updateCount from './updateCount';
import persist from './persist';

export default async function (postId: string, operation: CountOperation): Promise<void>
{
    const record = await retrieve(postId);

    const ratings = updateCount(record, operation);

    const succeeded = await persist(record.id, ratings);

    if (succeeded === false)
    {
        logger.warn(`Rating count for post metrics with id '${record.id}' has not been updated.`);
    }
}
