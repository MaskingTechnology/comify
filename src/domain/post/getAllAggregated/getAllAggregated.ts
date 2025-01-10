
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';
import logger from '^/integrations/logging';

import aggregate, { AggregatedData } from '../aggregate';
import getAll from '../getAll';

export default async function getAllAggregated(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getAll(requester, range.limit, range.offset);

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
