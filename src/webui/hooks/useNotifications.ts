
import requester from '^/domain/authentication/requester';
import getRecentNotifications from '^/domain/notification/getRecentAggregated/feature';

import { useLoadData } from '^/webui/utils';

export function useNotifications()
{
    const getNotifications = () => getRecentNotifications(requester);

    return useLoadData(getNotifications, []);
}
