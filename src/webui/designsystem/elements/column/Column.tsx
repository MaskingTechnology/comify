
import { ReactNode } from 'react';

import './Column.css';

type Props = {
    readonly alignX?: 'left' | 'center' | 'right' | 'stretch';
    readonly alignY?: 'top' | 'center' | 'bottom' | 'justify';
    readonly gap?: 'large' | 'medium' | 'small' | 'none';
    readonly wrap?: 'wrap' | 'nowrap';
    readonly children: ReactNode;
};

export default function Element({ alignX = 'left', alignY = 'top', gap = 'medium', wrap = 'nowrap', children }: Props)
{
    const className = 'column'
        + ' align-x-' + alignX
        + ' align-y-' + alignY
        + ' gap-' + gap
        + ' wrap-' + wrap;

    return <div className={className}>
        {children}
    </div>;
}
