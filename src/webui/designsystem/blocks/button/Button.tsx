
import React from 'react';

import './Button.css';

export type ButtonProps = {
    type?: 'submit' | 'primary' | 'secondary' | 'disabled';
    text: string;
    clickHandler?: React.MouseEventHandler<HTMLInputElement>;
};

export default function Button(props: ButtonProps)
{
    const className = 'ds-button ds-button-' + props.type ?? 'primary';
    const disabled = props.type === 'disabled';
    const type = props.type === 'submit' ? 'submit' : 'button';

    return <input type={type} onClick={props.clickHandler} className={className} disabled={disabled} value={props.text} />;
}
