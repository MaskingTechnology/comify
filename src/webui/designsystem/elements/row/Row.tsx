
import { ReactNode } from 'react';

import './Row.css';

export type Props = {
    readonly alignX?: 'left' | 'center' | 'right' | 'justify';
    readonly alignY?: 'top' | 'center' | 'bottom' | 'stretch';
    readonly gap?: 'large' | 'medium' | 'small' | 'none';
    readonly wrap?: 'wrap' | 'nowrap';
    readonly children: ReactNode;
};

export default function Element({ alignX = 'left', alignY = 'top', gap = 'medium', wrap = 'nowrap', children }: Props)
{
    const className = 'row'
        + ' align-x-' + alignX
        + ' align-y-' + alignY
        + ' gap-' + gap
        + ' wrap-' + wrap;

    return <div className={className}>
        {children}
    </div>;
}
