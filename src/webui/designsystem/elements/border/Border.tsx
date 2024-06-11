
import React from 'react';
import './Border.css';

export type Props = {
    readonly type?: 'normal' | 'dashed' | 'dotted';
    readonly size?: 'large' | 'medium' | 'small';
    readonly padding?: 'large' | 'medium' | 'small';
    readonly children?: React.ReactNode;
};

export default function Element({ type, size, padding, children }: Props)
{
    const className = 'border'
        + ' type-' + (type ?? 'normal')
        + ' size-' + (size ?? 'large')
        + ' padding-' + (padding ?? 'large');

    return <div className={className}>
        {children}
    </div>;
}
