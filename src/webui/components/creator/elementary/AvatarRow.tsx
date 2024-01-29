
import React from 'react';

import { Row, Avatar } from '../../../designsystem/module';

export type Props = {
    avatarSize: 'small' | 'medium' | 'large';
    avatarUrl: string;
    children: React.ReactNode;
};

function getActualSize(size: string): string
{
    switch (size)
    {
        case 'small': return '36px';
        case 'medium': return '50ps';
        case 'large': return '62px';
        default: return '';
    }
}

export default function Component({ avatarSize, avatarUrl, children }: Props)
{
    const gapSize = avatarSize === 'small' ? 'small' : 'medium';
    const actualSize = getActualSize(avatarSize);

    return <Row gap={gapSize}>
        <Avatar size={actualSize} source={avatarUrl} />
        {children}
    </Row>;
}
