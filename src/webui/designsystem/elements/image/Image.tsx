
import React from 'react';

import './Image.css';

export type ImageProps = {
    size?: 'large' | 'medium' | 'small';
    source: string;
    title?: string;
    alt?: string;
    width?: number;
    height?: number;
};

export default function Image(props: ImageProps)
{
    const size = props.size || 'medium';

    return <img
        className={'ds-image ds-image-size-' + size}
        title={props.title}
        alt={props.alt}
        width={props.width}
        height={props.height}
        src={props.source}
    />;
}
