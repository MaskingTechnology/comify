
import React from 'react';

import './Ruler.css';

export type RulesProps = {
    type: 'horizontal' | 'vertical';
};

export default function Ruler(props: RulesProps)
{
    return <div className={'ds-ruler ds-ruler-' + props.type} />;
}
