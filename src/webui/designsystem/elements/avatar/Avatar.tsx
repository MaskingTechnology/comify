
import React from 'react';

import './Avatar.css';

export type Props = {
    size?: string;
    source: string;
};

export default function Element({ size, source }: Props)
{
    return <img
        className='ds-avatar'
        src={source}
        width={size}
        height={size}
    />;
}
