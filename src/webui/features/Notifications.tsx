
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import getRecentNotifications from '^/domain/notification/getRecent';
import type NotificationView from '^/domain/notification/view/NotificationView';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, NotificationPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

export default function Feature()
{
    const [notifications, setNotifications] = useState<NotificationView[] | undefined>(undefined);

    const getNotifications = () => getRecentNotifications(johnDoe);

    const handleFollow = async (relation: RelationView) =>
    {
        console.log(`Followed ${relation.following.fullName}`);
        Promise.resolve();
    };

    const handleEdit = (relation: RelationView) =>
    {
        console.log(`Edit profile of: ${relation.following.fullName}`);
    };

    useEffect(() => awaitData(getNotifications, setNotifications), []);

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={notifications}>
            <NotificationPanelList
                notifications={notifications as NotificationView[]}
                followHandler={handleFollow}
                editHandler={handleEdit}
            />
        </LoadingContainer>
    </Column>;
}
