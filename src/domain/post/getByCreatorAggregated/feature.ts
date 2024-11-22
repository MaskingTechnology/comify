
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/common/types';
import validateRange from '^/domain/common/validateRange/feature';
import logger from '^/integrations/logging/module';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByCreator from '../getByCreator/feature';

export { type AggregatedData };

export default async function feature(requester: Requester, creatorId: string, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getByCreator(creatorId, range.limit, range.offset);

    const posts: AggregatedData[] = [];

    const promises = Promise.allSettled(data.map(item => aggregate(requester, item)));

    (await promises).forEach((promise) =>
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
