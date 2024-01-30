
import React from 'react';

import './Select.css';

export type Props = {
    name: string;
    options: Map<string, string>;
    value?: string;
    size?: 'large' | 'medium' | 'small';
    changeHandler?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function Element({ name, options, value, size, changeHandler }: Props)
{
    const className = 'ds-select'
        + ' ds-select-size-' + (size ?? 'medium');

    return <select className={className} name={name} defaultValue={value} onChange={changeHandler}>
        {Array.from(options).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
    </select>;
}
