
import type NotificationView from '^/domain/notification/view/NotificationView';

import { Column, Panel } from '^/webui/designsystem/module';

import TimeElapsed from '../relation/TimeElapsed';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';
import StartedFollowing from './elementary/StartedFollowing';

export type Props = {
    notification: NotificationView;
    followHandler: () => Promise<void>;
    profileHandler: () => void;
    editHandler?: () => void;
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

export default function Component({ notification, followHandler, profileHandler, editHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={notification.createdAt} relation={notification.relation} followHandler={followHandler} profileHandler={profileHandler} editHandler={editHandler} />
            {getContent(notification)}
        </Column>
    </Panel>;
}
