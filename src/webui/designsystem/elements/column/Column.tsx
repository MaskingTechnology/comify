
import React from 'react';
import './Column.css';

export type Props = {
    readonly alignX?: 'left' | 'center' | 'right' | 'stretch';
    readonly alignY?: 'top' | 'center' | 'bottom' | 'justify';
    readonly gap?: 'large' | 'medium' | 'small' | 'none';
    readonly wrap?: 'wrap' | 'nowrap';
    readonly children: React.ReactNode;
};

export default function Element({ alignX, alignY, gap, wrap, children }: Props)
{
    const className = 'column'
        + ' align-x-' + (alignX ?? 'left')
        + ' align-y-' + (alignY ?? 'top')
        + ' gap-' + (gap ?? 'medium')
        + ' wrap-' + (wrap ?? 'nowrap');

    return <div className={className}>
        {children}
    </div>;
}
