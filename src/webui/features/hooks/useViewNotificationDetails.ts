
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Types } from '^/domain/notification';
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate/types';

export default function useViewNotificationDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: AggregatedNotificationData) =>
    {

        switch (notification.type)
        {
            case Types.REACTED_TO_POST: return navigate(`/post/${notification.post?.parentId}/highlight/${notification.post?.id}`);
            case Types.RATED_POST: return navigate(`/post/${notification.post?.id}`);
        }

    }, [navigate]);
}
