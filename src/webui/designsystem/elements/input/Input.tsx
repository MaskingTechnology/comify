
import React from 'react';

import './Input.css';

import { Props as LabelProps } from '../label/Label';
import { Props as TextBoxProps } from '../textbox/TextBox';
import { Props as TextAreaProps } from '../textarea/TextArea';
import { Props as SelectProps } from '../select/Select';

export type Props = {
    label: React.ReactElement<LabelProps>;
    element: React.ReactElement<TextBoxProps> | React.ReactElement<TextAreaProps> | React.ReactElement<SelectProps>;
};

export default function Element({ label, element }: Props) 
{
    return (
        <div className="ds-input">
            {label}
            {element}
        </div>
    );
}
