
import logger from '@comify/common/integrations/logging';

import type { CountOperation } from '../definitions';
import retrieve from '../_retrieveByCreator';
import persist from './persist';

export default async function updatePosts(creatorId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(creatorId);

    const posts = operation === 'increase'
        ? record.posts + 1
        : record.posts - 1;

    const succeeded = await persist(record.id, posts);

    if (succeeded === false)
    {
        logger.warn(`Post count for creator metrics with id '${record.id}' has not been updated.`);
    }

    return posts;
}
