
import React from 'react';

import portraitImage from '^/webui/assets/images/portrait.svg';
import { Avatar, Row } from '^/webui/designsystem';

export type Props = {
    readonly avatarSize: 'small' | 'medium' | 'large';
    readonly avatarUrl?: string;
    readonly children: React.ReactNode;
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
    const source = avatarUrl ?? portraitImage;

    return <Row gap={gapSize}>
        <Avatar size={actualSize} source={source} />
        {children}
    </Row>;
}
