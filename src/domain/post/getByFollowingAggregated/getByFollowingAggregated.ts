
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';
import logger from '^/integrations/logging/module';

import aggregate, { AggregatedData } from '../aggregate';
import getByFollowing from '../getByFollowing';

export default async function getByFollowingAggregated(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getByFollowing(requester, range.limit, range.offset);

    const posts: AggregatedData[] = [];

    const promises = await Promise.allSettled(data.map(item => aggregate(requester, item)));

    promises.forEach((promise) =>
    {
        if (promise.status === 'rejected')
        {
            logger.logError('Error aggrgating Post', promise.reason);

            return;
        }

        posts.push(promise.value);
    });

    return posts;
}
