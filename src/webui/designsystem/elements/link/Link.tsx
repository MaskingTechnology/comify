
import React from 'react';

import './Link.css';

export type Props = {
    url?: string;
    target?: string;
    children: React.ReactNode;
};

export default function Element({ url, target, children }: Props)
{
    return <a className="ds-link" href={url} target={target}>
        {children}
    </a>;
}
