
import React from 'react';

import { Column } from '../../../designsystem/module';

import Item from './Item';

import timelineActiveIcon from '../../../../assets/images/navigation/timeline-active.svg';
import timelineInactiveIcon from '../../../../assets/images/navigation/timeline-inactive.svg';
import exploreActiveIcon from '../../../../assets/images/navigation/explore-active.svg';
import exploreInactiveIcon from '../../../../assets/images/navigation/explore-inactive.svg';
import notificationsActiveIcon from '../../../../assets/images/navigation/notifications-active.svg';
import notificationsInactiveIcon from '../../../../assets/images/navigation/notifications-inactive.svg';
import createActiveIcon from '../../../../assets/images/navigation/create-active.svg';
import createInactiveIcon from '../../../../assets/images/navigation/create-inactive.svg';
import profileActiveIcon from '../../../../assets/images/navigation/profile-active.svg';
import profileInactiveIcon from '../../../../assets/images/navigation/profile-inactive.svg';

export type Props = {
    identity: {
        nickname: string;
    };
};

export default function Component({ identity }: Props)
{
    return <nav>
        <Column gap='medium'>
            <Item title='Timeline' to='/timeline' activeIcon={timelineActiveIcon} inactiveIcon={timelineInactiveIcon} />
            <Item title='Explore' to='/explore' activeIcon={exploreActiveIcon} inactiveIcon={exploreInactiveIcon} />
            <Item title='Notifications' to='/notifications' activeIcon={notificationsActiveIcon} inactiveIcon={notificationsInactiveIcon} />
            <Item title='Create' to='/create' activeIcon={createActiveIcon} inactiveIcon={createInactiveIcon} />
            <Item title='Profile' to={`/profile/${identity.nickname}`} activeIcon={profileActiveIcon} inactiveIcon={profileInactiveIcon} />
        </Column>
    </nav>;
}
