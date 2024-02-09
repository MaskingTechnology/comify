
import React from 'react';
import './Column.css';

export type Props = {
    alignX?: 'left' | 'center' | 'right' | 'stretch';
    alignY?: 'top' | 'center' | 'bottom' | 'justify';
    gap?: 'large' | 'medium' | 'small' | 'none';
    wrap?: 'wrap' | 'nowrap';
    children: React.ReactNode;
};

export default function Element({ alignX, alignY, gap, wrap, children }: Props)
{
    const className = 'ds-column'
        + ' ds-column-align-x-' + (alignX ?? 'left')
        + ' ds-column-align-y-' + (alignY ?? 'top')
        + ' ds-column-gap-' + (gap ?? 'medium')
        + ' ds-column-wrap-' + (wrap ?? 'nowrap');

    return <div className={className}>
        {children}
    </div>;
}
