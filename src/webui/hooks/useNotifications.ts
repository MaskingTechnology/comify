
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type NotificationView from '^/domain/notification/aggregate/NotificationView';
import getRecentNotifications from '^/domain/notification/getRecentAggregated/getRecent';

import { awaitData } from '^/webui/utils';

export function useNotifications()
{
    const [notifications, setNotifications] = useState<NotificationView[] | undefined>(undefined);

    const getNotifications = () => getRecentNotifications(johnDoe);

    useEffect(() => awaitData(getNotifications, setNotifications), []);

    return [notifications, setNotifications] as const;
}
