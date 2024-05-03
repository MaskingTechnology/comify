
import React from 'react';
import './Row.css';

export type Props = {
    readonly alignX?: 'left' | 'center' | 'right' | 'justify';
    readonly alignY?: 'top' | 'center' | 'bottom' | 'stretch';
    readonly gap?: 'large' | 'medium' | 'small' | 'none';
    readonly wrap?: 'wrap' | 'nowrap';
    readonly children: React.ReactNode;
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
