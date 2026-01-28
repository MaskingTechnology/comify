
import { useMemo } from 'react';

import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import createActiveIcon from '~/assets/images/navigation/create-active.svg';
import createInactiveIcon from '~/assets/images/navigation/create-inactive.svg';
import exploreActiveIcon from '~/assets/images/navigation/explore-active.svg';
import exploreInactiveIcon from '~/assets/images/navigation/explore-inactive.svg';
import notificationsActiveIcon from '~/assets/images/navigation/notifications-active.svg';
import notificationsInactiveIcon from '~/assets/images/navigation/notifications-inactive.svg';
import profileActiveIcon from '~/assets/images/navigation/profile-active.svg';
import profileInactiveIcon from '~/assets/images/navigation/profile-inactive.svg';
import timelineActiveIcon from '~/assets/images/navigation/timeline-active.svg';
import timelineInactiveIcon from '~/assets/images/navigation/timeline-inactive.svg';

import { Menu } from '~/app/common';

type Props = {
    readonly vertical: boolean;
    readonly identity: AggregatedCreatorData;
};

export default function Component({ vertical, identity }: Props)
{
    const items = useMemo(() => [
        { title: 'Timeline', route: '/timeline', activeIcon: timelineActiveIcon, inactiveIcon: timelineInactiveIcon },
        { title: 'Explore', route: '/explore', activeIcon: exploreActiveIcon, inactiveIcon: exploreInactiveIcon },
        { title: 'Create', route: '/posts/create', activeIcon: createActiveIcon, inactiveIcon: createInactiveIcon },
        { title: 'Notifications', route: '/notifications', activeIcon: notificationsActiveIcon, inactiveIcon: notificationsInactiveIcon },
        { title: 'Profile', route: `/profile/${identity.nickname}`, activeIcon: profileActiveIcon, inactiveIcon: profileInactiveIcon }
    ], [identity]);

    return <Menu items={items} vertical={vertical} />;
}
