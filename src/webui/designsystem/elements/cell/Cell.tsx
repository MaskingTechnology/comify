
import React from 'react';
import './Cell.css';

export type Props = {
    readonly sizing?: 'fixed' | 'fluid';
    readonly children: React.ReactNode;
};

export default function Element({ sizing, children }: Props)
{
    const className = 'cell'
        + ' sizing-' + (sizing ?? 'fluid');

    return <div className={className}>
        {children}
    </div>;
}
