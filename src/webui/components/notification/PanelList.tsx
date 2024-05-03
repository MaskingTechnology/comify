
import type NotificationView from '^/domain/notification/view/NotificationView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem';

import NoResults from "../common/NoResults";
import Panel from './Panel';

export type Props = {
    readonly notifications: NotificationView[];
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
};

export default function Component({ notifications, onFollowClick, onCreatorClick }: Props)
{
    if (notifications.length === 0)
    {
        return <NoResults />;
    }

    return <Column gap='medium' alignX='stretch'>
        {
            notifications.map(notification =>
                <Panel
                    key={notification.id}
                    notification={notification}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                />
            )
        }
    </Column>;
}
