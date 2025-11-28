
import type { ReactNode } from 'react';

import './Cell.css';

type Props = {
    readonly sizing?: 'fixed' | 'fluid';
    readonly children: ReactNode;
};

export default function Element({ sizing = 'fluid', children }: Props)
{
    const className = 'cell'
        + ' sizing-' + sizing;

    return <div className={className}>
        {children}
    </div>;
}
