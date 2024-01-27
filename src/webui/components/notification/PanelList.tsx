
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';
import type NotificationView from '../../../domain/notification/NotificationView';

import { Column } from '../../designsystem/module';

import Panel from './Panel.js';

export type Props = {
    notifications: NotificationView[];
    followHandler: (relation: RelationView) => void;
};

export default function Component({ notifications, followHandler }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            notifications.map(notification =>
                <Panel
                    key={notification.id}
                    notification={notification}
                    followHandler={() => followHandler(notification.relation)}
                />
            )
        }
    </Column>;
}
