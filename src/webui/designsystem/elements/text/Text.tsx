
import React from 'react';

import './Text.css';

export type TextProps = {
    value: string;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
    wrap?: 'none' | 'normal' | 'break-word';
};

export default function Text(props: TextProps)
{
    const size = props.size ?? 'medium';
    const weight = props.weight ?? 'normal';
    const wrap = props.wrap ?? 'none';

    return <span className={'ds-text ds-text-size-' + size + ' ds-text-weight-' + weight + ' ds-text-wrap-' + wrap} >
        {props.value}
    </span>;
}
