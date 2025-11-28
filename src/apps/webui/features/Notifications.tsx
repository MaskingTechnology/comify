
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';

import { Column } from '@maskingtech/designsystem';
import { NotificationPanelList, PullToRefresh, ResultSet, ScrollLoader } from '^/webui/components';

import useEstablishRelation from './hooks/useEstablishRelation';
import useNotifications from './hooks/useNotifications';
import useViewNotificationDetails from './hooks/useViewNotificationDetails';
import useViewProfile from './hooks/useViewProfile';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewNotification = useViewNotificationDetails();

    const [notifications, isLoading, isFinished, getMoreNotifications, , refresh] = useNotifications();

    return <Column gap='small' alignX='stretch'>
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreNotifications} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD} >
                <ResultSet data={notifications} isLoading={isLoading}>
                    <NotificationPanelList
                        notifications={notifications as AggregatedNotificationData[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                        onNotificationClick={viewNotification}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column >;
}
