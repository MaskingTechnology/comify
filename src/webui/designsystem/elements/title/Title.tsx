
import React from 'react';
import './Title.css';

export type Props = {
    size?: 'large' | 'medium' | 'small';
    children: React.ReactNode;
};

export default function Element({ size, children }: Props)
{
    size ??= 'large';

    const className = 'ds-title'
        + ' ds-title-size-' + size;

    switch (size)
    {
        case 'large': return <h1 className={className}>{children}</h1>;
        case 'medium': return <h2 className={className}>{children}</h2>;
        case 'small': return <h3 className={className}>{children}</h3>;
    }
}
