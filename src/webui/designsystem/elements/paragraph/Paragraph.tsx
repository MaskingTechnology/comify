
import type { ReactNode } from 'react';

import './Paragraph.css';

type Props = {
    readonly size?: 'large' | 'medium' | 'small';
    readonly children: ReactNode;
};

export default function Element({ size = 'medium', children }: Props)
{
    const className = 'paragraph'
        + ' size-' + size;

    return <p className={className}>
        {children}
    </p>;
}
