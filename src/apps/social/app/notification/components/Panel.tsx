
import { Column, Panel } from '@maskingtech/designsystem';

import { Types } from '^/domain/notification';
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { TimeElapsed } from '~/app/relation';

import RatedPost from './elements/RatedPost';
import ReactedToPost from './elements/ReactedToPost';
import StartedFollowing from './elements/StartedFollowing';

type Props = {
    readonly notification: AggregatedNotificationData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onNotificationClick: (notification: AggregatedNotificationData) => void;
};

function getContent(notification: AggregatedNotificationData, onNotificationClick: (notification: AggregatedNotificationData) => void)
{
    switch (notification.type)
    {
        case Types.STARTED_FOLLOWING: return <StartedFollowing isFollowing={notification.relation.established} />;
        case Types.RATED_POST: return <RatedPost post={notification.post!} onClick={() => onNotificationClick(notification)} />;
        case Types.REACTED_TO_POST: return <ReactedToPost post={notification.post!} onClick={() => onNotificationClick(notification)} />;
    }
}

export default function Component({ notification, onFollowClick, onCreatorClick, onNotificationClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={notification.createdAt}
                relation={notification.relation}
                onFollowClick={onFollowClick}
                onCreatorClick={onCreatorClick}
            />
            {getContent(notification, onNotificationClick)}
        </Column>
    </Panel>;
}
