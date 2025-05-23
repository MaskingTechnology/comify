
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import PostMetricsNotFound from './PostMetricsNotFound';

export default async function getByPost(postId: string): Promise<DataModel>
{
    const query = { postId: { EQUALS: postId } };

    const data = await database.findRecord(RECORD_TYPE, query) as DataModel;

    if (data === undefined)
    {
        throw new PostMetricsNotFound();
    }

    return data;
}
