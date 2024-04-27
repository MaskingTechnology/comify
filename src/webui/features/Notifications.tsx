
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import getRecentNotifications from '^/domain/notification/getRecent';
import type NotificationView from '^/domain/notification/view/NotificationView';

import { LoadingContainer, NotificationPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

import handleFollow from './handlers/handleFollow';

export default function Feature()
{
    const [notifications, setNotifications] = useState<NotificationView[] | undefined>(undefined);

    const getNotifications = () => getRecentNotifications(johnDoe);

    const handleProfile = () =>
    {
        console.log('Profile');
    };

    useEffect(() => awaitData(getNotifications, setNotifications), []);

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={notifications}>
            <NotificationPanelList
                notifications={notifications as NotificationView[]}
                followHandler={handleFollow}
                profileHandler={handleProfile}
            />
        </LoadingContainer>
    </Column>;
}
