
import React from 'react';

import './Ruler.css';

export type Props = {
    type: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
};

export default function Element({ type, size }: Props)
{
    const className = 'ds-ruler'
        + ' ds-ruler-' + type
        + ' ds-ruler-' + (size ?? 'medium');

    return <div className={className} />;
}
