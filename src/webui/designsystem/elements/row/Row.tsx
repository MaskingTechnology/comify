
import React from 'react';
import './Row.css';

export type Props = {
    alignX?: 'left' | 'center' | 'right' | 'justify';
    alignY?: 'top' | 'center' | 'bottom' | 'stretch';
    gap?: 'large' | 'medium' | 'small' | 'none';
    wrap?: 'wrap' | 'nowrap';
    children: React.ReactNode;
};

export default function Element({ alignX, alignY, gap, wrap, children }: Props)
{
    const className = 'ds-row'
        + ' ds-row-align-x-' + (alignX ?? 'left')
        + ' ds-row-align-y-' + (alignY ?? 'top')
        + ' ds-row-gap-' + (gap ?? 'medium')
        + ' ds-row-wrap-' + (wrap ?? 'nowrap');

    return <div className={className}>
        {children}
    </div>;
}
