
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import getRecentNotifications from '^/domain/notification/getRecentAggregated';
import { tenant } from '^/domain/tenant';

export default function useNotifications()
{
    const limit = 6;

    const getNotifications = useCallback((page: number) =>
    {
        return getRecentNotifications(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getNotifications, limit);
}
