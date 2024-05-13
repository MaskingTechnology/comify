
import React, { RefObject } from 'react';
import './TextBox.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly value?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
    readonly reference?: RefObject<HTMLInputElement>;
};

export default function Element({ name, placeholder, value, size, onChange, reference }: Props)
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
        ref={reference}
    />;
}
