
import { Column, Panel } from '@maskingtech/designsystem';

import { Types } from '^/domain/notification';
import type { Notification } from '^/domain/notification';
import type { Relation } from '^/domain/relation';

import { TimeElapsed } from '~/components/relation';

import RatedPost from './elements/RatedPost';
import ReactedToPost from './elements/ReactedToPost';
import StartedFollowing from './elements/StartedFollowing';

type Props = {
    readonly notification: Notification;
    readonly onFollowClick: (relation: Relation) => Promise<void>;
    readonly onCreatorClick: (relation: Relation) => void;
    readonly onNotificationClick: (notification: Notification) => void;
};

function getContent(notification: Notification, onNotificationClick: (notification: Notification) => void)
{
    switch (notification.type)
    {
        case Types.STARTED_FOLLOWING: return <StartedFollowing isFollowing={notification.relation.established} />;
        case Types.RATED_POST: return <RatedPost post={notification.post!} onClick={() => onNotificationClick(notification)} />;
        case Types.REACTED_TO_POST: return <ReactedToPost post={notification.post!} onClick={() => onNotificationClick(notification)} />;
    }
}

export default function ({ notification, onFollowClick, onCreatorClick, onNotificationClick }: Props)
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
