
import React from 'react';

import './TextBox.css';

export type TextBoxProps = {
    name: string;
    placeholder?: string;
    value?: string;
    changeHandler?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function TextBox(props: TextBoxProps)
{
    return <input
        className='ds-textbox'
        type='text'
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={props.changeHandler}
    />;
}
