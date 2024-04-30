
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import getRecentNotifications from '^/domain/notification/getRecent';
import type NotificationView from '^/domain/notification/view/NotificationView';

import { awaitData } from '^/webui/utils/module';

export default function hook()
{
    const [notifications, setNotifications] = useState<NotificationView[] | undefined>(undefined);

    const getNotifications = () => getRecentNotifications(johnDoe);

    useEffect(() => awaitData(getNotifications, setNotifications), []);

    return [notifications, setNotifications] as const;
}
