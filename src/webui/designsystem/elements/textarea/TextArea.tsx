
import { ChangeEventHandler, forwardRef } from 'react';

import './TextArea.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly value?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly rows?: number;
    readonly limit?: number;
    readonly onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

type Ref = HTMLTextAreaElement;

export default forwardRef<Ref, Props>(function Element({ name, placeholder, value, size = 'medium', rows, limit, onChange }, ref)
{
    const className = 'textarea'
        + ' size-' + size;

    return <textarea
        className={className}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        rows={rows}
        ref={ref}
        maxLength={limit}
        onChange={onChange}>
    </textarea>;
});
