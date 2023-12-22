
import React from 'react';

import './Label.css';

export type LabelProps = {
    value: string;
};

export default function Label(props: LabelProps)
{
    return <label className="ds-label"> {props.value} </label>;
}
