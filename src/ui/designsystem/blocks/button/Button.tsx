
import React from 'react';

import './Button.css';

export type ButtonProps = {
    type?: 'primary' | 'secondary' | 'disabled';
    text: string;
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: ButtonProps)
{
    const className = 'ds-button ds-button-' + props.type ?? 'primary';
    const disabled = props.type === 'disabled';

    return <button onClick={props.clickHandler} className={className} disabled={disabled}>
        {props.text}
    </button>;
}
