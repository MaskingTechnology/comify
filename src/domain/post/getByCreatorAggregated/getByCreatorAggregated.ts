
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';
import logger from '^/integrations/logging';

import aggregate, { AggregatedData } from '../aggregate';
import getByCreator from '../getByCreator';

export { type AggregatedData };

export default async function getByCreatorAggregated(requester: Requester, creatorId: string, range: Range): Promise<AggregatedData[]>
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
