
import retrievePost from '~/post/_retrieveById';

import type { CountOperation } from '../definitions';
import { logger } from '../integrations';
import retrieveMetrics from '../_retrieveByCreator';

import updateCount from './updateCount';
import persist from './persist';

export default async function (tenantId: string, postId: string, parentId: string | undefined, operation: CountOperation): Promise<void>
{
    if (parentId !== undefined)
    {
        // Only root posts are counted

        return;
    }

    const postRecord = await retrievePost(tenantId, postId);

    const metricsRecord = await retrieveMetrics(postRecord.creatorId);

    const posts = updateCount(metricsRecord, operation);

    const succeeded = await persist(metricsRecord.id, posts);

    if (succeeded === false)
    {
        logger.warn(`Post count for creator metrics with id '${metricsRecord.id}' has not been updated.`);
    }
}
