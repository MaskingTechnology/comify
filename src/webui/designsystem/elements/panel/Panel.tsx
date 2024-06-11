
import React from 'react';
import './Panel.css';

export type Props = {
    readonly type?: 'normal' | 'alert' | 'warning' | 'success' | 'error' | 'transparent';
    readonly padding?: 'large' | 'medium' | 'small';
    readonly children?: React.ReactNode;
};

export default function Element({ type, padding, children }: Props)
{
    const className = 'panel'
        + ' type-' + (type ?? 'normal')
        + ' padding-' + (padding ?? 'large');

    return <div className={className}>
        {children}
    </div>;
}
