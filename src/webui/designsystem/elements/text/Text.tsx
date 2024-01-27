
import React from 'react';

import './Text.css';

export type Props = {
    value: string;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
    wrap?: 'none' | 'normal' | 'break-word';
};

export default function Element({ value, size, weight, wrap }: Props)
{
    const className = 'ds-text'
        + ' ds-text-size-' + (size ?? 'medium')
        + ' ds-text-weight-' + (weight ?? 'normal')
        + ' ds-text-wrap-' + (wrap ?? 'none');

    return <span className={className}>
        {value}
    </span>;
}
