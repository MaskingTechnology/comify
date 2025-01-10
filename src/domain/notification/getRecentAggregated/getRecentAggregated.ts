
import { Requester } from '^/domain/authentication';
import validateRange, { Range } from '^/domain/common/validateRange';
import logger from '^/integrations/logging';

import aggregate, { AggregatedData } from '../aggregate';
import getRecent from '../getRecent';

export default async function getRecentAggregated(requester: Requester, range: Range): Promise<AggregatedData[]>
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
