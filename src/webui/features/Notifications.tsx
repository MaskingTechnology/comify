
import { useEffect, useState } from 'react';
import getRecentNotifications from '../../domain/notification/getRecent';
import type NotificationView from '../../domain/notification/view/NotificationView';
import type RelationView from '../../domain/relation/view/RelationView';
import { NotificationPanelList } from '../components/module';
import { Column } from '../designsystem/module';

export default function Feature()
{
    const [notifications, setNotifications] = useState<NotificationView[] | undefined>(undefined);

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

    if (notifications === undefined)
    {
        return <>Loading...</>;
    }

    return <Column gap='small' alignX='stretch'>
        <NotificationPanelList notifications={notifications} followHandler={handleFollow} />
    </Column>;
}
