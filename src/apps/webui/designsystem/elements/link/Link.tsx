
import type { ReactNode } from 'react';

import './Link.css';

type Props = {
    readonly url?: string;
    readonly target?: string;
    readonly children: ReactNode;
};

export default function Element({ url, target, children }: Props)
{
    return <a className="link" href={url} target={target}>
        {children}
    </a>;
}
