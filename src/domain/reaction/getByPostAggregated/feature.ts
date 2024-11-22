
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/common/types';
import logger from '^/integrations/logging/module';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getByPost from '../getByPost/feature';

export default async function feature(requester: Requester, postId: string, range: Range): Promise<AggregatedData[]>
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
