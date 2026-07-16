
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Types } from '^/domain/notification';
import type { Notification } from '^/domain/notification';

export default function useViewNotificationDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: Notification) =>
    {

        switch (notification.type)
        {
            case Types.REACTED_TO_POST: return navigate(`/posts/${notification.post?.parentId}/highlight/${notification.post?.id}`);
            case Types.RATED_POST: return navigate(`/posts/${notification.post?.id}`);
        }

    }, [navigate]);
}
