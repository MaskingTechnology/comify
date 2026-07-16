
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Notification } from '^/domain/notification'; // TODO: refactor to post

export default function useViewPostHighlightDetails()
{
    const navigate = useNavigate();

    return useCallback((notification: Notification) =>
    {
        navigate(`/posts/${notification.post?.parentId}/highlight/${notification.post?.id}`);

    }, [navigate]);
}
