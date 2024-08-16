
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Column, Panel } from '^/webui/designsystem';

import TimeElapsed from '../relation/TimeElapsed';
import AddedReaction from './elementary/AddedReaction';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';
import StartedFollowing from './elementary/StartedFollowing';

type Props = {
    readonly notification: NotificationView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onReactionClick: (reaction: ReactionView) => void;
    readonly onComicClick: (post: PostView) => void;
};

function getContent(notification: NotificationView, onReactionClick: (reaction: ReactionView) => void, onComicClick: (post: PostView) => void)
{
    switch (notification.type)
    {
        case 'started-following': return <StartedFollowing isFollowing={notification.relation.established} />;
        case 'rated-post': return <RatedPost post={notification.post as PostView} onComicClick={onComicClick} />;
        case 'rated-reaction': return <RatedReaction reaction={notification.reaction as ReactionView} onReactionClick={onReactionClick} />;
        case 'added-reaction': return <AddedReaction notification={notification as NotificationView} onReactionClick={onReactionClick} />;
    }
}

export default function Component({ notification, onFollowClick, onCreatorClick, onReactionClick, onComicClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={notification.createdAt}
                relation={notification.relation}
                onFollowClick={onFollowClick}
                onCreatorClick={onCreatorClick}
            />
            {getContent(notification, onReactionClick, onComicClick)}
        </Column>
    </Panel>;
}
