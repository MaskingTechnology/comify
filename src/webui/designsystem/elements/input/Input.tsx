
import React from 'react';

import './Input.css';

import { LabelProps } from '../label/Label';
import { TextBoxProps } from '../textbox/TextBox';
import { TextareaProps } from '../textarea/TextArea';
import { SelectProps } from '../select/Select';

export type InputProps = {
    label: React.ReactElement<LabelProps>;
    element: React.ReactElement<TextBoxProps> | React.ReactElement<TextareaProps> | React.ReactElement<SelectProps>;
};

export default function Input(props: InputProps) 
{
    return (
        <div className="ds-input">
            {props.label}
            {props.element}
        </div>
    );
}
