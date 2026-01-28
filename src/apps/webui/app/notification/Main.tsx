
import { Column } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';

import { PullToRefresh, ResultContainer, ScrollLoader } from '~/app/common';
import { useViewProfile } from '~/app/profile';
import { useEstablish } from '~/app/relation';

import PanelList from './components/PanelList';

import useNotifications from './hooks/useNotifications';
import useViewNotificationDetails from './hooks/useViewNotificationDetails';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablish();
    const viewProfile = useViewProfile();
    const viewNotification = useViewNotificationDetails();

    const [notifications, isLoading, isFinished, getMoreNotifications, , refresh] = useNotifications();

    return <Column gap='medium' alignX='stretch'>
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreNotifications} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD} >
                <ResultContainer data={notifications} isLoading={isLoading}>
                    <PanelList
                        notifications={notifications as AggregatedNotificationData[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                        onNotificationClick={viewNotification}
                    />
                </ResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
