
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column } from '^/webui/designsystem';

import Panel from './Panel';

type Props = {
    readonly notifications: AggregatedNotificationData[];
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
    readonly onPostClick: (post: AggregatedPostData) => void;
};

export default function Component({ notifications, onFollowClick, onCreatorClick, onReactionClick, onPostClick }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            notifications.map(notification =>
                <Panel
                    key={notification.id}
                    notification={notification}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                    onReactionClick={onReactionClick}
                    onPostClick={onPostClick}
                />
            )
        }
    </Column>;
}
