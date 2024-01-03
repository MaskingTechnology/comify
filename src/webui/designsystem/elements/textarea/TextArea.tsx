
import React from 'react';

import './TextArea.css';

export type TextareaProps = {
    name: string;
    size?: 'large' | 'medium' | 'small';
    placeholder?: string;
    value?: string;
    changeHandler?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export default function TextArea(props: TextareaProps)
{
    const size = props.size ?? 'medium';

    return <textarea
        className={'ds-textarea ds-textarea-size-' + size}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={props.changeHandler}>
    </textarea>;
}
