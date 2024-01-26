
import React from 'react';

import './TextBox.css';

export type Props = {
    name: string;
    placeholder?: string;
    value?: string;
    changeHandler?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Element({ name, placeholder, value, changeHandler }: Props)
{
    return <input
        className='ds-textbox'
        type='text'
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={changeHandler}
    />;
}
