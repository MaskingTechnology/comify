
import React from 'react';

import './Image.css';

export type ImageProps = {
    size?: 'large' | 'medium' | 'small';
    source: string;
};

export default function Image(props: ImageProps)
{
    const size = props.size ?? 'medium';

    return <img className={'ds-image ds-image-size-' + size} src={props.source} />;
}
