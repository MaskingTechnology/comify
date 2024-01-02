
import React from 'react';

import './Row.css';

export type RowProps = {
    align?: 'left' | 'center' | 'right';
    gap?: 'large' | 'medium' | 'small' | 'none';
    wrap?: 'wrap' | 'nowrap';
    children: React.ReactNode;
};

export default function Row(props: RowProps)
{
    const align = props.align ?? 'left';
    const gap = props.gap ?? 'medium';
    const wrap = props.wrap ?? 'nowrap';

    return <div className={'ds-row ds-row-align-' + align + ' ds-row-gap-' + gap + ' ds-row-wrap-' + wrap}>
        {props.children}
    </div>;
}
