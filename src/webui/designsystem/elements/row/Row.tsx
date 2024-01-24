
import React from 'react';

import './Row.css';

export type RowProps = {
    alignX?: 'left' | 'center' | 'right' | 'justify';
    alignY?: 'top' | 'center' | 'bottom' | 'stretch';
    gap?: 'large' | 'medium' | 'small' | 'none';
    wrap?: 'wrap' | 'nowrap';
    children: React.ReactNode;
};

export default function Row(props: RowProps)
{
    const alignX = props.alignX ?? 'left';
    const alignY = props.alignY ?? 'top';
    const gap = props.gap ?? 'medium';
    const wrap = props.wrap ?? 'nowrap';

    const className = 'ds-row'
        + ' ds-row-align-x-' + alignX
        + ' ds-row-align-y-' + alignY
        + ' ds-row-gap-' + gap
        + ' ds-row-wrap-' + wrap;

    return <div className={className}>
        {props.children}
    </div>;
}
