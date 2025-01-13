
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';
import logger from '^/integrations/logging';

import aggregate, { AggregatedData } from '../aggregate';
import explore from '../explore';

export default async function exploreAggregated(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await explore(requester, range.limit, range.offset);

    const posts: AggregatedData[] = [];

    const promises = await Promise.allSettled(data.map(item => aggregate(requester, item)));

    promises.forEach((promise) =>
    {
        if (promise.status === 'rejected')
        {
            logger.logError('Error on aggregating Post', promise.reason);

            return;
        }

        posts.push(promise.value);
    });

    return posts;
}
