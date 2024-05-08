
import React from 'react';
import './TextBox.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly value?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Element({ name, placeholder, value, size, onChange }: Props)
{
    const className = 'ds-textbox'
        + ' ds-textbox-size-' + (size ?? 'medium');

    return <input
        className={className}
        type='text'
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
    />;
}
