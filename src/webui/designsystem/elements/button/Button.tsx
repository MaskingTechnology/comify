
import React from 'react';

import './Button.css';

export type ButtonProps = {
    type?: 'submit' | 'primary' | 'secondary' | 'disabled';
    size?: 'large' | 'medium' | 'small';
    text: string;
    clickHandler?: React.MouseEventHandler<HTMLInputElement>;
};

export default function Button(props: ButtonProps)
{
    const type = props.type ?? 'primary';
    const size = props.size ?? 'medium';
    const className = 'ds-button ds-button-' + type + ' ds-button-size-' + size;
    const disabled = props.type === 'disabled';
    const inputType = props.type === 'submit' ? 'submit' : 'button';

    return <input type={inputType} onClick={props.clickHandler} className={className} disabled={disabled} value={props.text} />;
}
