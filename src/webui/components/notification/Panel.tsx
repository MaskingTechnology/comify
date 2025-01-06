
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Column, Panel } from '^/webui/designsystem';

import TimeElapsed from '../relation/TimeElapsed';
import AddedPostReaction from './elementary/AddedPostReaction';
import AddedReactionReaction from './elementary/AddedReactionReaction';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';
import StartedFollowing from './elementary/StartedFollowing';

type Props = {
    readonly notification: NotificationView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onReactionClick: (reaction: ReactionView) => void;
    readonly onPostClick: (post: PostView) => void;
    readonly onPostHighlightClick: (notification: NotificationView) => void;
    readonly onReactionHighlightClick: (notification: NotificationView) => void;
    readonly onNotificationClick: (notification: NotificationView) => void;
};

function getContent(notification: NotificationView, onReactionClick: (reaction: ReactionView) => void, onPostClick: (post: PostView) => void, onReactionHighlightClick: (notification: NotificationView) => void, onPostHighlightClick: (notification: NotificationView) => void, onNotificationClick: (notification: NotificationView) => void)
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

export default function Component({ notification, onFollowClick, onCreatorClick, onReactionClick, onPostClick, onPostHighlightClick, onReactionHighlightClick, onNotificationClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={notification.createdAt}
                relation={notification.relation}
                onFollowClick={onFollowClick}
                onCreatorClick={onCreatorClick}
            />
            {getContent(notification, onReactionClick, onPostClick, onReactionHighlightClick, onPostHighlightClick, onNotificationClick)}
        </Column>
    </Panel>;
}
