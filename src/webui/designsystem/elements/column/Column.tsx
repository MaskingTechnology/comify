
import React from 'react';

import './Column.css';

export type ColumnProps = {
    alignX?: 'left' | 'center' | 'right' | 'stretch';
    alignY?: 'top' | 'center' | 'bottom' | 'justify';
    gap?: 'large' | 'medium' | 'small' | 'none';
    wrap?: 'wrap' | 'nowrap';
    children: React.ReactNode;
};

export default function Column(props: ColumnProps)
{
    const alignX = props.alignX ?? 'left';
    const alignY = props.alignY ?? 'top';
    const gap = props.gap ?? 'medium';
    const wrap = props.wrap ?? 'nowrap';

    const className = 'ds-column'
        + ' ds-column-align-x-' + alignX
        + ' ds-column-align-y-' + alignY
        + ' ds-column-gap-' + gap
        + ' ds-column-wrap-' + wrap;

    return <div className={className}>
        {props.children}
    </div>;
}
