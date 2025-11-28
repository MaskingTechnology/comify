
import type { ReactNode } from 'react';

import { Row } from '^/webui/designsystem';

import Avatar from './Avatar';

type Props = {
    readonly avatarSize: 'small' | 'medium' | 'large';
    readonly avatarUrl?: string;
    readonly children: ReactNode;
};

export default function Component({ avatarSize, avatarUrl, children }: Props)
{
    const gapSize = avatarSize === 'small' ? 'small' : 'medium';

    return <Row gap={gapSize}>
        <Avatar url={avatarUrl} size={avatarSize} />
        {children}
    </Row>;
}
