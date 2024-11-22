
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/common/types';
import validateRange from '^/domain/common/validateRange/feature';
import logger from '^/integrations/logging/module';

import aggregate from '../aggregate/feature';
import type { AggregatedData } from '../aggregate/types';
import getRecent from '../getRecent/feature';

export default async function feature(requester: Requester, range: Range): Promise<AggregatedData[]>
{
    validateRange(range);

    const data = await getRecent(requester.id, range.limit, range.offset);

    const notifications: AggregatedData[] = [];

    const promises = await Promise.allSettled(data.map(item => aggregate(requester, item)));

    promises.forEach((promise) => 
    {
        if (promise.status === 'rejected')
        {
            logger.logError('Error on aggregating Notification', promise.reason);

            return;
        }

        notifications.push(promise.value);
    });

    return (notifications);
}
