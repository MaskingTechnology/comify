
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';

import { LoadingContainer, NotificationPanelList } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useNotifications from './hooks/useNotifications';
import useViewProfile from './hooks/useViewProfile';

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
