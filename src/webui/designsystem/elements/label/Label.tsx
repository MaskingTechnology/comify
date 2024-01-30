
import React from 'react';

import './Label.css';

export type Props = {
    value: string;
};

export default function Element({ value }: Props)
{
    return <label className="ds-label">
        {value}
    </label>;
}
