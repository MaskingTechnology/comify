
import { ChangeEventHandler, forwardRef } from 'react';

import './TextBox.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly value?: string;
    readonly limit?: number;
    readonly pattern?: string;
    readonly title?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly required?: boolean;
    readonly onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Ref = HTMLInputElement;

export default forwardRef<Ref, Props>(function Element({ name, placeholder, value, limit, pattern, title, size = 'medium', required, onChange }, ref)
{
    const className = 'textbox'
        + ' size-' + size;

    return <input
        className={className}
        type='text'
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        maxLength={limit}
        pattern={pattern}
        title={title}
        ref={ref}
        required={required}
        onChange={onChange}
    />;
});
