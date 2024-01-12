
import React from 'react';

import { AvatarProps } from '../designsystem/elements/avatar/Avatar.js';

import CreatorNames from './CreatorNames.js';
import FixedDynamicTwoColumn from '../elements/FixedDynamicTwoColumn.js';

export type IdentityProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    nickname: string;
};

export default function Identity(props: IdentityProps)
{
    return <FixedDynamicTwoColumn
        left={props.avatar}
        right={<CreatorNames username={props.username} nickname={props.nickname} />}
    />;
}
