
import type { Requester } from '^/domain/authentication/types';
import type { Range } from '^/domain/common/types';
import validateRange from '^/domain/common/validateRange/feature';
import logger from '^/integrations/logging/module';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByFollowing from '../getByFollowing/feature';

export default async function feature(requester: Requester, range: Range): Promise<AggregatedData[]>
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
