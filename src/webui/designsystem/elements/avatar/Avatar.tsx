
import React from 'react';

import './Avatar.css';

export type Props = {
    size?: 'large' | 'medium' | 'small';
    source: string;
};

export default function Element({ size, source }: Props)
{
    const className = 'ds-avatar'
        + ' ds-avatar-size-' + (size ?? 'medium');

    return <img className={className} src={source} />;
}
