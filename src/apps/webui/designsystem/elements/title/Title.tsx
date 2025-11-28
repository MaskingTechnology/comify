
import type { ReactNode } from 'react';

import './Title.css';

type Props = {
    readonly size?: 'large' | 'medium' | 'small';
    readonly children: ReactNode;
};

export default function Element({ size = 'large', children }: Props)
{
    const className = 'title'
        + ' size-' + size;

    switch (size)
    {
        case 'large': return <h1 className={className}>{children}</h1>;
        case 'medium': return <h2 className={className}>{children}</h2>;
        case 'small': return <h3 className={className}>{children}</h3>;
    }
}
