
import { Column } from '@maskingtech/designsystem';

import { type Notification } from '^/domain/notification';
import { type Relation } from '^/domain/relation';

import Panel from './Panel';

type Props = {
    readonly notifications: Notification[];
    readonly onFollowClick: (relation: Relation) => Promise<void>;
    readonly onCreatorClick: (relation: Relation) => void;
    readonly onNotificationClick: (notification: Notification) => void;
};

export default function ({ notifications, onFollowClick, onCreatorClick, onNotificationClick }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            notifications.map(notification =>
                <Panel
                    key={notification.createdAt.getDate()}
                    notification={notification}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                    onNotificationClick={onNotificationClick}
                />
            )
        }
    </Column>;
}
