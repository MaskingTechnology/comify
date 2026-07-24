
import logger from '@comify/common/integrations/logging';

import retrievePost from '~/post/_retrieveById';

import type { CountOperation } from '../definitions';
import retrieveMetrics from '../_retrieveByCreator';
import persist from './persist';

export default async function updatePosts(tenantId: string, postId: string, operation: CountOperation): Promise<void>
{
    const postRecord = await retrievePost(tenantId, postId);

    if (postRecord.parentId !== undefined)
    {
        // We only want to count root posts
        return;
    }

    const metricsRecord = await retrieveMetrics(postRecord.creatorId);

    const posts = operation === 'increase'
        ? metricsRecord.posts + 1
        : metricsRecord.posts - 1;

    const succeeded = await persist(metricsRecord.id, posts);

    if (succeeded === false)
    {
        logger.warn(`Post count for creator metrics with id '${metricsRecord.id}' has not been updated.`);
    }
}
