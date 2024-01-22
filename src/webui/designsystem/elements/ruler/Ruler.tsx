
import React from 'react';

import './Ruler.css';

export type RulerProps = {
    type: 'horizontal' | 'vertical';
};

export default function Ruler(props: RulerProps)
{
    return <div className={'ds-ruler ds-ruler-' + props.type} />;
}
