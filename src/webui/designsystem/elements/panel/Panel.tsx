
import React from 'react';
import './Panel.css';

export type Props = {
    type?: 'normal' | 'alert' | 'warning' | 'success' | 'error' | 'transparent';
    padding?: 'large' | 'medium' | 'small';
    children?: React.ReactNode;
};

export default function Element({ type, padding, children }: Props)
{
    const className = 'ds-panel'
        + ' ds-panel-' + (type ?? 'normal')
        + ' ds-panel-padding-' + (padding ?? 'large');

    return <div className={className}>
        {children}
    </div>;
}
