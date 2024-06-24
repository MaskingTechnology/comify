
import { ReactNode } from 'react';

import './Panel.css';

type Props = {
    readonly type?: 'normal' | 'alert' | 'warning' | 'success' | 'error' | 'transparent';
    readonly padding?: 'large' | 'medium' | 'small';
    readonly children?: ReactNode;
};

export default function Element({ type = 'normal', padding = 'large', children }: Props)
{
    const className = 'panel'
        + ' type-' + type
        + ' padding-' + padding;

    return <div className={className}>
        {children}
    </div>;
}
