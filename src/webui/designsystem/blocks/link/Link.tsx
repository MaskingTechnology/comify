
import React from 'react';

import './Link.css';

export type LinkProps = {
    size?: 'large' | 'medium' | 'small';
    url?: string;
    target?: string;
    value: string;
};

export default function Link(props: LinkProps)
{
    const size = props.size ?? 'medium';

    return <a className={'ds-link ds-link-size-' + size} href={props.url} target={props.target} > {props.value} </a >;
};
