
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Record } from '../definitions';
import PostMetricsNotFound from '../_retrieveByPost/PostMetricsNotFound';

export default async function run(postId: string): Promise<Record>
{
    const query = { postId: { EQUALS: postId } };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.warn(`Metrics for post '${postId}' could not be found.`);

        throw new PostMetricsNotFound();
    }

    return record as Record;
}

export { PostMetricsNotFound };
