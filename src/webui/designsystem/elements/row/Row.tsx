
import { ReactNode } from 'react';
import './Row.css';

export type Props = {
    readonly alignX?: 'left' | 'center' | 'right' | 'justify';
    readonly alignY?: 'top' | 'center' | 'bottom' | 'stretch';
    readonly gap?: 'large' | 'medium' | 'small' | 'none';
    readonly wrap?: 'wrap' | 'nowrap';
    readonly children: ReactNode;
};

export default function Element({ alignX, alignY, gap, wrap, children }: Props)
{
    const className = 'row'
        + ' align-x-' + (alignX ?? 'left')
        + ' align-y-' + (alignY ?? 'top')
        + ' gap-' + (gap ?? 'medium')
        + ' wrap-' + (wrap ?? 'nowrap');

    return <div className={className}>
        {children}
    </div>;
}
