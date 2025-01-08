
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column, Panel } from '^/webui/designsystem';

import TimeElapsed from '../relation/TimeElapsed';
import AddedReaction from './elementary/AddedReaction';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';
import StartedFollowing from './elementary/StartedFollowing';

type Props = {
    readonly notification: AggregatedNotificationData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
    readonly onPostClick: (post: AggregatedPostData) => void;
};

function getContent(notification: AggregatedNotificationData, onReactionClick: (reaction: AggregatedReactionData) => void, onPostClick: (post: AggregatedPostData) => void)
{
    switch (notification.type)
    {
        case 'started-following': return <StartedFollowing isFollowing={notification.relation.established} />;
        case 'rated-post': return <RatedPost post={notification.post as AggregatedPostData} onPostClick={onPostClick} />;
        case 'rated-reaction': return <RatedReaction reaction={notification.reaction as AggregatedReactionData} onReactionClick={onReactionClick} />;
        case 'added-reaction': return <AddedReaction notification={notification} onReactionClick={onReactionClick} />;
    }
}

export default function Component({ notification, onFollowClick, onCreatorClick, onReactionClick, onPostClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={notification.createdAt}
                relation={notification.relation}
                onFollowClick={onFollowClick}
                onCreatorClick={onCreatorClick}
            />
            {getContent(notification, onReactionClick, onPostClick)}
        </Column>
    </Panel>;
}
