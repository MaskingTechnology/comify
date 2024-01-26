
import React from 'react';

import './Grid.css';

export type GridProps = {
    layout?: 'two-columns' | 'three-columns' | 'four-columns';
    gap?: 'large' | 'medium' | 'small' | 'none';
    children: React.ReactNode;
};

export default function Grid(props: GridProps)
{
    const layout = props.layout ?? 'two-columns';
    const gap = props.gap ?? 'medium';

    const className = 'ds-grid'
        + ' ds-grid-' + layout
        + ' ds-grid-gap-' + gap;

    return <div className={className}>
        {props.children}
    </div>;
}
