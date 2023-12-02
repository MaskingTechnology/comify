
import React from 'react';

import './Icon.css';

export type IconProps = {
    size?: 'large' | 'medium' | 'small';
    source: string;
};

export default function Icon(props: IconProps)
{
    const size = props.size ?? 'medium';

    return <img className={'ds-icon ds-icon-size-' + size} src={props.source} />;
}
