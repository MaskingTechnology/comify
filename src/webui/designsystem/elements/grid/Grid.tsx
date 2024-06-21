
import { ReactNode } from 'react';

import './Grid.css';

export type Props = {
    readonly layout: 'two-columns' | 'three-columns' | 'four-columns';
    readonly gap?: 'large' | 'medium' | 'small' | 'none';
    readonly children: ReactNode;
};

export default function Element({ layout, gap = 'medium', children }: Props)
{
    const className = 'grid'
        + ' layout-' + layout
        + ' gap-' + gap;

    return <div className={className}>
        {children}
    </div>;
}
