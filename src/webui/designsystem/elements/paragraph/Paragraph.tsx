
import React from 'react';
import './Paragraph.css';

export type Props = {
    readonly size?: 'large' | 'medium' | 'small';
    readonly children: React.ReactNode;
};

export default function Element({ size, children }: Props)
{
    const className = 'ds-paragraph'
        + ' ds-paragraph-size-' + (size ?? 'medium');

    return <p className={className}>
        {children}
    </p>;
}
