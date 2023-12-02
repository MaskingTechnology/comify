
import React from 'react';

import './Label.css';

export type LabelProps = {
    size?: 'small' | 'medium' | 'large';
    value: string;
};

export default function Label(props: LabelProps)
{
    const size = props.size ?? 'medium';

    return <label className={'ds-label ds-label-size-' + size} > {props.value} </label>;
}
