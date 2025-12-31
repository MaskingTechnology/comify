
import database from '@theshelf/database';
import logger from '@theshelf/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import PostMetricsNotFound from './PostMetricsNotFound';

export default async function getByPost(postId: string): Promise<DataModel>
{
    const query = { postId: { EQUALS: postId } };

    const record = await database.readRecord(RECORD_TYPE, query) as DataModel;

    if (record === undefined)
    {
        logger.logWarn(`Metrics for post '${postId}' could not be found.`);

        throw new PostMetricsNotFound();
    }

    return record;
}
