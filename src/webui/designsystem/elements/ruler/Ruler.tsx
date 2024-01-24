
import React from 'react';

import './Ruler.css';

export type RulerProps = {
    type: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
};

export default function Ruler(props: RulerProps)
{
    const size = props.size ?? 'medium';

    return <div className={'ds-ruler ds-ruler-' + props.type + ' ds-ruler-' + size} />;
}
