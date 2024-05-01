
import React from 'react';
import './TextBox.css';

export type Props = {
    name: string;
    placeholder?: string;
    value?: string;
    size?: 'large' | 'medium' | 'small';
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
