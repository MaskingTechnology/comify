
import React from 'react';

import { Row, Avatar } from '../../../designsystem/module';

export type Props = {
    avatarSize: 'small' | 'medium' | 'large';
    avatarUrl?: string;
    children: React.ReactNode;
};

function getActualSize(size: string): string
{
    switch (size)
    {
        case 'small': return '36px';
        case 'medium': return '50px';
        case 'large': return '62px';
        default: return '';
    }
}

export default function Component({ avatarSize, avatarUrl, children }: Props)
{
    const gapSize = avatarSize === 'small' ? 'small' : 'medium';
    const actualSize = getActualSize(avatarSize);
    const source = avatarUrl ?? 'https://via.placeholder.com/62x62';

    return <Row gap={gapSize}>
        <Avatar size={actualSize} source={source} />
        {children}
    </Row>;
}
