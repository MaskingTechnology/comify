
import React from 'react';

import { AvatarProps } from '../../designsystem/module';

import CreatorNames from '../creatornames/CreatorNames';
import FixedDynamicTwoColumn from '../fixeddynamictwocolumn/FixedDynamicTwoColumn';

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
