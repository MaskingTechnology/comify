
import React from 'react';

import './Avatar.css';

export type AvatarProps = {
    size?: 'large' | 'medium' | 'small';
    source: string;
};

export default function Avatar(props: AvatarProps)
{
    const size = props.size ?? 'medium';

    return <img className={'ds-avatar ds-avatar-size-' + size} src={props.source} />;
}
