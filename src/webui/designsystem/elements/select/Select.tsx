
import { ChangeEventHandler, forwardRef } from 'react';

import './Select.css';

export type Props = {
    readonly name: string;
    readonly options: Map<string, string>;
    readonly value?: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly onChange?: ChangeEventHandler<HTMLSelectElement>;
};

type Ref = HTMLSelectElement;

export default forwardRef<Ref, Props>(function Element({ name, options, value, size = 'medium', onChange }, ref)
{
    const className = 'select'
        + ' size-' + size;

    return <select
        className={className}
        name={name}
        defaultValue={value}
        onChange={onChange}
        ref={ref}
    >
        {
            Array
                .from(options)
                .map(([key, value]) => <option key={key} value={key}>{value}</option>)
        }
    </select>;
});
