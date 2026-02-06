
import { Column } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import Panel from './Panel';

type Props = {
    readonly notifications: AggregatedNotificationData[];
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onNotificationClick: (notification: AggregatedNotificationData) => void;
};

export default function Component({ notifications, onFollowClick, onCreatorClick, onNotificationClick }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            notifications.map(notification =>
                <Panel
                    key={notification.id}
                    notification={notification}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                    onNotificationClick={onNotificationClick}
                />
            )
        }
    </Column>;
}
