
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';

import { NotificationPanelList, PullToRefresh, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useNotifications from './hooks/useNotifications';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';
import useViewReactionDetails from './hooks/useViewReactionDetails';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewReactionDetails = useViewReactionDetails();
    const viewPostDetails = useViewPostDetails();

    const [notifications, isLoading, isFinished, getMoreNotifications, , refresh] = useNotifications();

    return <Column gap='small' alignX='stretch'>
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreNotifications} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD} >
                <ResultSet data={notifications} isLoading={isLoading}>
                    <NotificationPanelList
                        notifications={notifications as NotificationView[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                        onReactionClick={viewReactionDetails}
                        onComicClick={viewPostDetails}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column >;
}
