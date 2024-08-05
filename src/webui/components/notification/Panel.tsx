
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Column, Panel } from '^/webui/designsystem';

import TimeElapsed from '../relation/TimeElapsed';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';
import StartedFollowing from './elementary/StartedFollowing';

type Props = {
    readonly notification: NotificationView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
};

function getContent(notification: NotificationView)
{
    switch (notification.type)
    {
        case 'started-following': return <StartedFollowing isFollowing={notification.relation.established} />;
        case 'rated-post': return <RatedPost comicDataUrl={notification.post?.comic.image.dataUrl as string} />;
        case 'rated-reaction': return <RatedReaction reaction={notification.reaction as ReactionView} />;
    }
}

export default function Component({ notification, onFollowClick, onCreatorClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={notification.createdAt}
                relation={notification.relation}
                onFollowClick={onFollowClick}
                onCreatorClick={onCreatorClick}
            />
            {getContent(notification)}
        </Column>
    </Panel>;
}
