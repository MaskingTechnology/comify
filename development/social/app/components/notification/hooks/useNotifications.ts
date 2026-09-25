
import { usePagination } from '@maskingtech/react-toolkit';
import { useCallback } from 'react';

import { requester } from '@comify/common/security';

import getRecentNotifications from '^/domain/notification/getRecent';

export default function useNotifications()
{
    const limit = 6;

    const getNotifications = useCallback((page: number) =>
    {
        return getRecentNotifications(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getNotifications, limit);
}
