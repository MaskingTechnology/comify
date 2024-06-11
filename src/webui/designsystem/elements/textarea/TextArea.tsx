
import React from 'react';
import './TextArea.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly value?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly rows?: number;
    readonly limit?: number;
    readonly onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export default function Element({ name, placeholder, value, size, rows, limit, onChange }: Props)
{
    const className = 'textarea'
        + ' size-' + (size ?? 'medium');

    return <textarea
        className={className}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        rows={rows}
        maxLength={limit}
        onChange={onChange}>
    </textarea>;
}
