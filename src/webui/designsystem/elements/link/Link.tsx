
import React from 'react';

import './Link.css';

export type LinkProps = {
    url?: string;
    target?: string;
    children: React.ReactNode;
};

export default function Link(props: LinkProps)
{
    return <a className="ds-link" href={props.url} target={props.target}>{props.children}</a>;
}
