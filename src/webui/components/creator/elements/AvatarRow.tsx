
import React from 'react';

import { Row, Avatar, AvatarProps } from '../../../designsystem/module';

export type Props = {
    avatarSize: AvatarProps['size'];
    avatarUrl: string;
    children: React.ReactNode;
};

export default function Component(props: Props)
{
    const gapSize = props.avatarSize === 'small' ? 'small' : 'medium';

    return <Row gap={gapSize}>
        <Avatar size={props.avatarSize} source={props.avatarUrl} />
        {props.children}
    </Row>;
}
