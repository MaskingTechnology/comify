
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
    readonly onComicClick: (post: PostView) => void;
};

export default function Component({ notifications, onFollowClick, onCreatorClick, onReactionClick, onComicClick }: Props)
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
                    onComicClick={onComicClick}
                />
            )
        }
    </Column>;
}
