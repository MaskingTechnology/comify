
import React from 'react';

import './Select.css';

export type Props = {
    name: string;
    options: Map<string, string>;
    value?: string;
    changeHandler?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function Element({ name, options, value, changeHandler }: Props)
{
    return <select className='ds-select' name={name} defaultValue={value} onChange={changeHandler}>
        {Array.from(options).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
    </select>;
}
