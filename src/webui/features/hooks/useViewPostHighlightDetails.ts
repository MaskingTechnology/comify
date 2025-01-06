
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';

export default function useViewPostHighlightDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: NotificationView) =>
    {
        navigate(`/post/${notification.targetPost?.id}/highlight/${notification.sourceReaction?.id}`);

    }, [navigate]);
}
