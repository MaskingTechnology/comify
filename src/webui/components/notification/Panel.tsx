
import type NotificationView from '^/domain/notification/view/NotificationView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column, Panel } from '^/webui/designsystem';

import TimeElapsed from '../relation/TimeElapsed';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';
import StartedFollowing from './elementary/StartedFollowing';

export type Props = {
    notification: NotificationView;
    onFollowClick: (relation: RelationView) => Promise<void>;
    onCreatorClick: (relation: RelationView) => void;
};

function getContent(notification: NotificationView)
{
    switch (notification.type)
    {
        case 'started-following': return <StartedFollowing isFollowing={notification.relation.exists} />;
        case 'rated-post': return <RatedPost comicDataUrl={notification.post?.comic.image.dataUrl as string} />;
        case 'rated-reaction': return <RatedReaction />;
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
