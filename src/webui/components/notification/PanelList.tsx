
import type NotificationView from '^/domain/notification/view/NotificationView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem/module';

import NoResults from "../common/NoResults";
import Panel from './Panel';

export type Props = {
    notifications: NotificationView[];
    followHandler: (relation: RelationView) => Promise<void>;
    profileHandler: (relation: RelationView) => void;
    editHandler?: (relation: RelationView) => void;
};

export default function Component({ notifications, followHandler, profileHandler, editHandler }: Props)
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
                    followHandler={() => followHandler(notification.relation)}
                    profileHandler={() => profileHandler(notification.relation)}
                    editHandler={editHandler !== undefined ? () => editHandler(notification.relation) : undefined}
                />
            )
        }
    </Column>;
}
