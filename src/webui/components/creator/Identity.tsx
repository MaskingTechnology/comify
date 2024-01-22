
import React from 'react';

import { AvatarProps } from '../../designsystem/module';

import Names from './Names';
import AvatarWithContentRight from './AvatarWithContentRight';

export type IdentityProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    nickname: string;
};

export default function Identity(props: IdentityProps)
{
    return <AvatarWithContentRight
        avatar={props.avatar}
        right={<Names username={props.username} nickname={props.nickname} />}
    />;
}
