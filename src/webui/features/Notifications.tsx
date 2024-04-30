
import type NotificationView from '^/domain/notification/view/NotificationView';

import { LoadingContainer, NotificationPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useEstablishRelation, useNotifications, useViewProfile } from '^/webui/hooks/module';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();

    const [notifications] = useNotifications();

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={notifications}>
            <NotificationPanelList
                notifications={notifications as NotificationView[]}
                followHandler={establishRelation}
                profileHandler={viewProfile}
            />
        </LoadingContainer>
    </Column>;
}
