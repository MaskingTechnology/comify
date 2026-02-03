
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate/types';

export default function useViewPostHighlightDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: AggregatedNotificationData) =>
    {
        navigate(`/posts/${notification.post?.parentId}/highlight/${notification.post?.id}`);

    }, [navigate]);
}
