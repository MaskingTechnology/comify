
import React from 'react';

import './Column.css';

export type ColumnProps = {
    align?: 'top' | 'center' | 'bottom' | 'justify';
    gap?: 'large' | 'medium' | 'small' | 'none';
    wrap?: 'wrap' | 'nowrap';
    stretch?: boolean;
    children: React.ReactNode;
};

export default function Column(props: ColumnProps)
{
    const align = props.align ?? 'top';
    const gap = props.gap ?? 'medium';
    const wrap = props.wrap ?? 'nowrap';
    const stretch = props.stretch ?? false;

    const className = 'ds-column ds-column-align-' + align
        + ' ds-column-gap-' + gap
        + ' ds-column-wrap-' + wrap
        + (stretch ? ' ds-column-stretch' : '');

    return <div className={className}>
        {props.children}
    </div>;
}
