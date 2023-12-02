
import React from 'react';

import './Select.css';

export type SelectProps = {
    name: string;
    values: Map<string, string>;
    value?: string;
    changeHandler?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function Select(props: SelectProps)
{
    return (
        <select className='ds-select' name={props.name} defaultValue={props.value} onChange={props.changeHandler}>
            {Array.from(props.values).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
        </select>
    );
}
