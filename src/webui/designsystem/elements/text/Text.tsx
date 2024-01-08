
import React from 'react';

import './Text.css';

export type TextProps = {
    value: string;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

export default function Text(props: TextProps)
{
    const size = props.size ?? 'medium';
    const weight = props.weight ?? 'normal';

    return <span className={'ds-text ds-text-size-' + size + ' ds-text-weight-' + weight} >
        {props.value}
    </span>;
}