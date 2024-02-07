
import React from 'react';

import type NotificationView from '../../../domain/notification/view/NotificationView';

import { Column, Panel } from '../../designsystem/module';

import TimeElapsed from '../relation/TimeElapsed';

import StartedFollowing from './elementary/StartedFollowing';
import RatedPost from './elementary/RatedPost';
import RatedReaction from './elementary/RatedReaction';

export type Props = {
    notification: NotificationView;
    followHandler: () => void;
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

export default function Component({ notification, followHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={notification.createdAt} relation={notification.relation} followHandler={followHandler} />
            {getContent(notification)}
        </Column>
    </Panel>;
}
