
import { Requester } from '^/domain/authentication';
import { Range } from '^/domain/common/validateRange';
import logger from '^/integrations/logging/module';

import aggregate, { AggregatedData } from '../aggregate';
import getByPost from '../getByPost';

export default async function getByPostAggregated(requester: Requester, postId: string, range: Range): Promise<AggregatedData[]>
{
    const data = await getByPost(postId, range.limit, range.offset);

    const reactions: AggregatedData[] = [];

    const promises = await Promise.allSettled(data.map(item => aggregate(requester, item)));

    promises.forEach((promise) =>
    {
        if (promise.status === 'rejected')
        {
            logger.logError('Error on aggregating Reaction', promise.reason);

            return;
        }

        reactions.push(promise.value);
    });

    return reactions;
}
