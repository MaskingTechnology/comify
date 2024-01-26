
import React from 'react';

import { Row, Avatar, AvatarProps } from '../../../designsystem/module';

export type Props = {
    avatarSize: AvatarProps['size'];
    avatarUrl: string;
    children: React.ReactNode;
};

export default function Element({ avatarSize, avatarUrl, children }: Props)
{
    const gapSize = avatarSize === 'small' ? 'small' : 'medium';

    return <Row gap={gapSize}>
        <Avatar size={avatarSize} source={avatarUrl} />
        {children}
    </Row>;
}
