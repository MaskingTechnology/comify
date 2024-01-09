
import React from 'react';

import './Image.css';

export type ImageProps = {
    source: string;
    title?: string;
    alt?: string;
    width?: string;
    height?: string;
};

export default function Image(props: ImageProps)
{
    return <img
        title={props.title}
        alt={props.alt}
        width={props.width}
        height={props.height}
        src={props.source}
    />;
}
