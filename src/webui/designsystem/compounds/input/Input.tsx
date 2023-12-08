
import React from 'react';

import './Input.css';

import { LabelProps } from '../../blocks/label/Label.js';
import { TextBoxProps } from '../../blocks/textbox/TextBox.js';
import { TextareaProps } from '../../blocks/textarea/TextArea.js';
import { SelectProps } from '../../blocks/select/Select.js';

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
