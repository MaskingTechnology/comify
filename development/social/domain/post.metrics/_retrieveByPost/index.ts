
import { type Record } from '../definitions';
import { logger } from '../integrations';

import retrieve from './retrieve';
import PostMetricsNotFound from './PostMetricsNotFound';

export default async function run(postId: string): Promise<Record>
{
    const record = await retrieve(postId);

    if (record === undefined)
    {
        logger.warn(`Metrics for post '${postId}' could not be found.`);

        throw new PostMetricsNotFound();
    }

    return record;
}

export { PostMetricsNotFound };
