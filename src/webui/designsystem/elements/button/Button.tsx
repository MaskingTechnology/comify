
import React from 'react';
import './Button.css';

export type Props = {
    type?: 'submit' | 'primary' | 'secondary' | 'disabled';
    size?: 'large' | 'medium' | 'small';
    text: string;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
};

export default function Element({ type, size, text, onClick }: Props)
{
    type ??= 'primary';
    size ??= 'medium';

    const className = 'ds-button'
        + ' ds-button-' + type
        + ' ds-button-size-' + size;

    const disabled = type === 'disabled';
    const inputType = type === 'submit' ? 'submit' : 'button';

    return <input type={inputType} onClick={onClick} className={className} disabled={disabled} value={text} />;
}
