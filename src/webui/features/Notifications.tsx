
import type NotificationView from '^/domain/notification/view/NotificationView';

import { LoadingContainer, NotificationPanelList } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useNotifications, useViewProfile } from '^/webui/hooks';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();

    const [notifications] = useNotifications();

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={notifications}>
            <NotificationPanelList
                notifications={notifications as NotificationView[]}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
            />
        </LoadingContainer>
    </Column>;
}
