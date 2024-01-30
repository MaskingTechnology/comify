
import React from 'react';

import './Paragraph.css';

export type Props = {
    size?: 'large' | 'medium' | 'small';
    children: React.ReactNode;
};

export default function Element({ size, children }: Props)
{
    const className = 'ds-paragraph'
        + ' ds-paragraph-size-' + (size ?? 'medium');

    return <p className={className}>
        {children}
    </p>;
}
