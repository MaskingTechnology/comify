
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';

import { NotificationPanelList, PullToRefresh, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useNotifications from './hooks/useNotifications';
import useViewNotificationDetails from './hooks/useViewNotificationDetails';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewPostHighlight from './hooks/useViewPostHighlightDetails';
import useViewProfile from './hooks/useViewProfile';
import useViewReactionDetails from './hooks/useViewReactionDetails';
import useViewReactionHighlight from './hooks/useViewReactionHighlightDetails';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewNotification = useViewNotificationDetails();
    const viewReactionDetails = useViewReactionDetails();
    const viewPostDetails = useViewPostDetails();
    const viewReactionHighlight = useViewReactionHighlight();
    const viewPostHighlight = useViewPostHighlight();


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
                        onReactionClick={viewReactionDetails}
                        onPostClick={viewPostDetails}
                        onReactionHighlightClick={viewReactionHighlight}
                        onPostHighlightClick={viewPostHighlight}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column >;
}
