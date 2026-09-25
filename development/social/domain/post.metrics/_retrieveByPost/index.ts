
import database from '@comify/common/integrations/database';
import { type Identifier } from '@comify/common/primitives/identifier';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

import PostMetricsNotFound from './PostMetricsNotFound';

export default async function (postId: Identifier): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        postId: { EQUALS: postId }
    });

    if (result.notFound)
    {
        logger.warn(`Metrics for post '${postId}' could not be found.`);

        throw new PostMetricsNotFound();
    }

    return result.record!;
}

export { PostMetricsNotFound };
