
import React, { RefObject } from 'react';
import './TextBox.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly value?: string;
    readonly pattern?: string;
    readonly title?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly reference?: RefObject<HTMLInputElement>;
    readonly required?: boolean;
    readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Element({ name, placeholder, value, pattern, title, size, reference, required, onChange }: Props)
{
    const className = 'ds-textbox'
        + ' ds-textbox-size-' + (size ?? 'medium');

    return <input
        className={className}
        type='text'
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        pattern={pattern}
        title={title}
        ref={reference}
        required={required}
        onChange={onChange}
    />;
}
