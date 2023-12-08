
import React from 'react';

import './Message.css';

export type MessageProps = {
    size?: 'large' | 'medium' | 'small';
    value: string;
};

export default function Message(props: MessageProps)
{
    const size = props.size ?? 'medium';

    return <span className={'ds-message ds-message-size-' + size} > {props.value} </span >;
}
