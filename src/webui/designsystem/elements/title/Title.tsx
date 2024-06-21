
import { ReactNode } from 'react';
import './Title.css';

export type Props = {
    readonly size?: 'large' | 'medium' | 'small';
    readonly children: ReactNode;
};

export default function Element({ size, children }: Props)
{
    const className = 'title'
        + ' size-' + (size ?? 'large');

    switch (size)
    {
        case 'large': return <h1 className={className}>{children}</h1>;
        case 'medium': return <h2 className={className}>{children}</h2>;
        case 'small': return <h3 className={className}>{children}</h3>;
    }
}
