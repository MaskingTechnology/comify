
import React from 'react';

import './Column.css';

export type ColumnProps = {
    align?: 'top' | 'center' | 'bottom';
    gap?: 'none' | 'small' | 'medium' | 'large';
    wrap?: 'wrap' | 'nowrap';
    children: React.ReactNode;
};

export default function Column(props: ColumnProps)
{
    const align = props.align ?? 'top';
    const gap = props.gap ?? 'medium';
    const wrap = props.wrap ?? 'nowrap';

    return <div className={'ds-column ds-column-align-' + align + ' ds-column-gap-' + gap + ' ds-column-wrap-' + wrap}>{props.children}</div>;
}
