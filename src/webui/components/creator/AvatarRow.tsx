
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import { Row, Avatar, AvatarProps } from '../../designsystem/module';

export type Props = {
    avatarSize: AvatarProps['size'];
    creator: Creator;
    children: React.ReactNode;
};

export default function Component(props: Props)
{
    const avatarSize = props.avatarSize;
    const portrait = props.creator.portrait;

    return <Row gap='small'>
        <Avatar size={avatarSize} source={portrait.dataUrl} />
        {props.children}
    </Row>;
}
