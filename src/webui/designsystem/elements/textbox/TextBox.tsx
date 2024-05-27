
import React, { RefObject } from 'react';
import './TextBox.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly value?: string;
    readonly pattern?: string;
    readonly title?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
    readonly reference?: RefObject<HTMLInputElement>;
    readonly required?: boolean;
};

export default function Element({ name, placeholder, value, pattern, title, size, onChange, reference, required }: Props)
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
        onChange={onChange}
        ref={reference}
        required={required}
    />;
}
