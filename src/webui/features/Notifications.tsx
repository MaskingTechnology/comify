
import React, { useState, useEffect } from 'react';

import type RelationView from '../../domain/relation/view/RelationView';
import type NotificationView from '../../domain/notification/view/NotificationView';
import getRecentNotifications from '../../domain/notification/getRecent';

import { Column } from '../designsystem/module';

import { NotificationPanelList } from '../components/module';

export default function Feature()
{
    const [notifications, setNotifications] = useState<NotificationView[]>([]);

    const getNotifications = async () =>
    {
        const notifications = await getRecentNotifications();
        setNotifications(notifications);
    };

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
    };

    useEffect(() => { getNotifications(); }, []);

    return <Column gap='small' alignX='stretch'>
        <NotificationPanelList notifications={notifications} followHandler={handleFollow} />
    </Column>;
}
