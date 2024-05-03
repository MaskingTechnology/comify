
import React from 'react';
import './Link.css';

export type Props = {
    readonly url?: string;
    readonly target?: string;
    readonly children: React.ReactNode;
};

export default function Element({ url, target, children }: Props)
{
    return <a className="ds-link" href={url} target={target}>
        {children}
    </a>;
}
