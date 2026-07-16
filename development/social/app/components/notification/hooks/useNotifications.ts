
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import getRecentNotifications from '^/domain/notification/getRecent';

export default function useNotifications()
{
    const limit = 6;

    const getNotifications = useCallback((page: number) =>
    {
        return getRecentNotifications(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getNotifications, limit);
}
