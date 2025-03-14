
import type { ReactElement } from 'react';

import type { Props as LabelProps } from '../label/Label';
import type { Props as SelectProps } from '../select/Select';
import type { Props as TextAreaProps } from '../textarea/TextArea';
import type { Props as TextBoxProps } from '../textbox/TextBox';

import './Input.css';

type Props = {
    readonly label: ReactElement<LabelProps>;
    readonly element: ReactElement<TextBoxProps> | ReactElement<TextAreaProps> | ReactElement<SelectProps>;
};

export default function Element({ label, element }: Props) 
{
    return (
        <div className="input">
            {label}
            {element}
        </div>
    );
}
