
import React from 'react';
import './TextArea.css';

export type Props = {
    name: string;
    placeholder?: string;
    value?: string;
    size?: 'large' | 'medium' | 'small';
    rows?: number;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export default function Element({ name, placeholder, value, size, rows, onChange }: Props)
{
    const className = 'ds-textarea'
        + ' ds-textarea-size-' + (size ?? 'medium');

    return <textarea
        className={className}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        rows={rows}
        onChange={onChange}>
    </textarea>;
}
