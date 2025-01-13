
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column, Panel } from '^/webui/designsystem';

import TimeElapsed from '../relation/TimeElapsed';
import AddedPostReaction from './elementary/AddedPostReaction';
import AddedReactionReaction from './elementary/AddedReactionReaction';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';
import StartedFollowing from './elementary/StartedFollowing';

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
        case 'started-following': return <StartedFollowing isFollowing={notification.relation.established} />;
        case 'rated-post': return <RatedPost notification={notification} onPostClick={onNotificationClick} />;
        case 'rated-reaction': return <RatedReaction notification={notification} onReactionClick={onNotificationClick} />;
        case 'added-reaction-post': return <AddedPostReaction notification={notification} onPostHighlightClick={onNotificationClick} />;
        case 'added-reaction-reaction': return <AddedReactionReaction notification={notification} onReactionHighlightClick={onNotificationClick} />;
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
