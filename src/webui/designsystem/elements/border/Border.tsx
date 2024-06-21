
import { ReactNode } from 'react';

import './Border.css';

export type Props = {
    readonly type?: 'normal' | 'dashed' | 'dotted';
    readonly size?: 'large' | 'medium' | 'small';
    readonly padding?: 'large' | 'medium' | 'small' | 'none';
    readonly children?: ReactNode;
};

export default function Element({ type = 'normal', size = 'large', padding = 'large', children }: Props)
{
    const className = 'border'
        + ' type-' + type
        + ' size-' + size
        + ' padding-' + padding;

    return <div className={className}>
        {children}
    </div>;
}
