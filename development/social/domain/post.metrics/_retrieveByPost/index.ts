
import type { Identifier } from '@comify/common/primitives/identifier';

import { type Record } from '../definitions';
import { logger } from '../integrations';

import retrieve from './retrieve';
import PostMetricsNotFound from './PostMetricsNotFound';

export default async function (postId: Identifier): Promise<Record>
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
