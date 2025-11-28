
import { Column, Row } from '@maskingtech/designsystem';

import createActiveIcon from '^/webui/assets/images/navigation/create-active.svg';
import createInactiveIcon from '^/webui/assets/images/navigation/create-inactive.svg';
import exploreActiveIcon from '^/webui/assets/images/navigation/explore-active.svg';
import exploreInactiveIcon from '^/webui/assets/images/navigation/explore-inactive.svg';
import notificationsActiveIcon from '^/webui/assets/images/navigation/notifications-active.svg';
import notificationsInactiveIcon from '^/webui/assets/images/navigation/notifications-inactive.svg';
import profileActiveIcon from '^/webui/assets/images/navigation/profile-active.svg';
import profileInactiveIcon from '^/webui/assets/images/navigation/profile-inactive.svg';
import timelineActiveIcon from '^/webui/assets/images/navigation/timeline-active.svg';
import timelineInactiveIcon from '^/webui/assets/images/navigation/timeline-inactive.svg';

import Item from './MenuItem';

type Props = {
    readonly vertical: boolean;
    readonly identity: {
        nickname: string;
    };
};

export default function Component({ vertical, identity }: Props)
{
    const Container = vertical ? Column : Row;

    const gapSize = vertical ? 'medium' : 'large';
    const alignX = vertical ? 'left' : 'center';

    return <nav>
        <Container gap={gapSize} alignX={alignX}>
            <Item vertical={vertical} title='Timeline' to='/timeline' activeIcon={timelineActiveIcon} inactiveIcon={timelineInactiveIcon} />
            <Item vertical={vertical} title='Explore' to='/explore' activeIcon={exploreActiveIcon} inactiveIcon={exploreInactiveIcon} />
            <Item vertical={vertical} title='Create' to='/create' activeIcon={createActiveIcon} inactiveIcon={createInactiveIcon} />
            <Item vertical={vertical} title='Notifications' to='/notifications' activeIcon={notificationsActiveIcon} inactiveIcon={notificationsInactiveIcon} />
            <Item vertical={vertical} title='Profile' to={`/profile/${identity.nickname}`} activeIcon={profileActiveIcon} inactiveIcon={profileInactiveIcon} />
        </Container>
    </nav>;
}
