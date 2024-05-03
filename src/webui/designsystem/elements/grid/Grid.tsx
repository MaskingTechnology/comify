
import React from 'react';
import './Grid.css';

export type Props = {
    readonly layout: 'two-columns' | 'three-columns' | 'four-columns';
    readonly gap?: 'large' | 'medium' | 'small' | 'none';
    readonly children: React.ReactNode;
};

export default function Element({ layout, gap, children }: Props)
{
    const className = 'ds-grid'
        + ' ds-grid-' + layout
        + ' ds-grid-gap-' + (gap ?? 'medium');

    return <div className={className}>
        {children}
    </div>;
}
