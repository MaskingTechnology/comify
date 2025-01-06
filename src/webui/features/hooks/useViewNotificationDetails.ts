
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';

export default function useViewNotificationDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: NotificationView) =>
    {

        switch (notification.type)
        {
            case 'added-reaction-reaction': return navigate(`/reaction/${notification.targetReaction?.id}/highlight/${notification.sourceReaction?.id}`);
            case 'rated-reaction': return navigate(`/reaction/${notification.targetReaction?.id}`);
            case 'added-reaction-post': return navigate(`/post/${notification.targetPost?.id}/highlight/${notification.sourceReaction?.id}`);
            case 'rated-post': return navigate(`/post/${notification.targetPost?.id}`);
        }

    }, [navigate]);
}
