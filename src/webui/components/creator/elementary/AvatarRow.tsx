
import React from 'react';

import portraitImage from '^/webui/assets/images/portrait.svg';
import { Avatar, Row } from '^/webui/designsystem';

type Props = {
    readonly avatarSize: 'small' | 'medium' | 'large';
    readonly avatarUrl?: string;
    readonly children: React.ReactNode;
};

function getWidth(size: string): string
{
    switch (size)
    {
        case 'small': return '2.2em';
        case 'medium': return '3em';
        case 'large': return '3.7em';
        default: return '';
    }
}

export default function Component({ avatarSize, avatarUrl, children }: Props)
{
    const gapSize = avatarSize === 'small' ? 'small' : 'medium';
    const width = getWidth(avatarSize);
    const source = avatarUrl ?? portraitImage;

    return <Row gap={gapSize}>
        <Avatar source={source} width={width} />
        {children}
    </Row>;
}
