
import React from 'react';
import './Border.css';

export type Props = {
    type?: 'normal' | 'dashed' | 'dotted';
    size?: 'large' | 'medium' | 'small';
    padding?: 'large' | 'medium' | 'small';
    children?: React.ReactNode;
};

export default function Element({ type, size, padding, children }: Props)
{
    const className = 'ds-border'
        + ' ds-border-' + (type ?? 'normal')
        + ' ds-border-size-' + (size ?? 'large')
        + ' ds-border-padding-' + (padding ?? 'large');

    return <div className={className}>
        {children}
    </div>;
}
