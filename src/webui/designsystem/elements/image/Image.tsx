
import React from 'react';

import './Image.css';

export type ImageProps = {
    size?: 'large' | 'medium' | 'small';
    source: string;
    /* Needs an alt and title? */
};

export default function Image(props: ImageProps)
{
    const size = props.size ?? 'medium';

    return <img className={'ds-image ds-image-size-' + size} src={props.source} />;
}
