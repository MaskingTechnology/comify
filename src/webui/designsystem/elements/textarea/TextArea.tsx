
import React from 'react';

import './TextArea.css';

export type Props = {
    name: string;
    size?: 'large' | 'medium' | 'small';
    placeholder?: string;
    value?: string;
    changeHandler?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export default function Element({ name, size, placeholder, value, changeHandler }: Props)
{
    const className = 'ds-textarea'
        + ' ds-textarea-size-' + (size ?? 'medium');

    return <textarea
        className={className}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={changeHandler}>
    </textarea>;
}
