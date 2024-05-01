
import React from 'react';
import './Select.css';

export type Props = {
    name: string;
    options: Map<string, string>;
    value?: string;
    size?: 'large' | 'medium' | 'small';
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function Element({ name, options, value, size, onChange }: Props)
{
    const className = 'ds-select'
        + ' ds-select-size-' + (size ?? 'medium');

    return <select className={className} name={name} defaultValue={value} onChange={onChange}>
        {Array.from(options).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
    </select>;
}
