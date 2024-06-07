
import React from 'react';
import './Select.css';

export type Props = {
    readonly name: string;
    readonly options: Map<string, string>;
    readonly value?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function Element({ name, options, value, size, onChange }: Props)
{
    const className = 'select'
        + ' size-' + (size ?? 'medium');

    return <select className={className} name={name} defaultValue={value} onChange={onChange}>
        {Array.from(options).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
    </select>;
}
