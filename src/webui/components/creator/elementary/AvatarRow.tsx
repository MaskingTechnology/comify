
import React from 'react';

import { Row, Avatar } from '../../../designsystem/module';

export type Props = {
    avatarSize: 'small' | 'medium' | 'large';
    avatarUrl: string;
    children: React.ReactNode;
};

export default function Component({ avatarSize, avatarUrl, children }: Props)
{
    const gapSize = avatarSize === 'small' ? 'small' : 'medium';

    return <Row gap={gapSize}>
        <Avatar size={avatarSize} source={avatarUrl} />
        {children}
    </Row>;
}
