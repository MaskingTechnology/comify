
import React from 'react';

import './Row.css';

export type RowProps = {
    align?: 'left' | 'center' | 'right' | 'justify';
    gap?: 'large' | 'medium' | 'small' | 'none';
    wrap?: 'wrap' | 'nowrap';
    stretch?: boolean;
    children: React.ReactNode;
};

export default function Row(props: RowProps)
{
    const align = props.align ?? 'left';
    const gap = props.gap ?? 'medium';
    const wrap = props.wrap ?? 'nowrap';
    const stretch = props.stretch ?? false;

    const className = 'ds-row ds-row-align-' + align
        + ' ds-row-gap-' + gap
        + ' ds-row-wrap-' + wrap
        + (stretch ? ' ds-row-stretch' : '');

    return <div className={className}>
        {props.children}
    </div>;
}
