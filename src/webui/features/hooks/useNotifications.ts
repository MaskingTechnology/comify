
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import getRecentNotifications from '^/domain/notification/getRecentAggregated/feature';

import { useLoadData } from '^/webui/hooks';

export default function useNotifications()
{
    const getNotifications = useCallback(() =>
    {
        return getRecentNotifications(requester);

    }, []);

    return useLoadData(getNotifications);
}
