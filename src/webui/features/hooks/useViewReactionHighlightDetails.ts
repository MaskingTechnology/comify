
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';

export default function useViewReactionHighlightDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: NotificationView) =>
    {
        navigate(`/reaction/${notification.targetReaction?.reactionId}/highlight/${notification.sourceReaction?.id}`);

    }, [navigate]);
}
