
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';

export default function useViewPostHighlightDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: NotificationView) =>
    {
        navigate(`/post/${notification.post?.parentId}/highlight/${notification.post?.id}`);

    }, [navigate]);
}
