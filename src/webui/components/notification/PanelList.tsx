
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Column } from '^/webui/designsystem';

import Panel from './Panel';

type Props = {
    readonly notifications: NotificationView[];
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onReactionClick: (reaction: ReactionView) => void;
    readonly onPostClick: (post: PostView) => void;
    readonly onReactionHighlightClick: (notification: NotificationView) => void;
    readonly onPostHighlightClick: (notification: NotificationView) => void;
    readonly onNotificationClick: (notification: NotificationView) => void;
};

export default function Component({ notifications, onFollowClick, onCreatorClick, onReactionClick, onPostClick, onReactionHighlightClick, onPostHighlightClick, onNotificationClick }: Props)
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
                    onReactionHighlightClick={onReactionHighlightClick}
                    onPostHighlightClick={onPostHighlightClick}
                    onNotificationClick={onNotificationClick}
                />
            )
        }
    </Column>;
}
