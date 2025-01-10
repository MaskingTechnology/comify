
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import getRecentNotifications from '^/domain/notification/getRecentAggregated';

import { usePagination } from '^/webui/hooks';

export default function useNotifications()
{
    const limit = 6;

    const getNotifications = useCallback((page: number) =>
    {
        return getRecentNotifications(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getNotifications, limit);
}
