
import { Row } from '@maskingtech/designsystem';
import { type ReactNode } from 'react';

import Avatar from './Avatar';

type Props = {
    readonly avatarSize: 'small' | 'medium' | 'large';
    readonly avatarUrl?: string;
    readonly children: ReactNode;
};

export default function ({ avatarSize, avatarUrl, children }: Props)
{
    const gapSize = avatarSize === 'small' ? 'small' : 'medium';

    return <Row gap={gapSize}>
        <Avatar url={avatarUrl} size={avatarSize} />
        {children}
    </Row>;
}
