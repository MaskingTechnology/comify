
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import getRecentNotifications from '../../domain/notification/getRecent';
import type NotificationView from '../../domain/notification/view/NotificationView';
import type RelationView from '../../domain/relation/view/RelationView';
import { LoadingContainer, NotificationPanelList } from '../components/module';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export default function Feature()
{
    const [notifications, setNotifications] = useState<NotificationView[] | undefined>(undefined);

    const getNotifications = () => getRecentNotifications(johnDoe);

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
    };

    useEffect(() => awaitData(getNotifications, setNotifications), []);

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={notifications}>
            <NotificationPanelList notifications={notifications as NotificationView[]} followHandler={handleFollow} />
        </LoadingContainer>
    </Column>;
}
