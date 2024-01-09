
import React from 'react';
import { IconProps } from '../designsystem/elements/icon/Icon.js';

export type ReactionProps = {
    icon: React.ReactElement<IconProps>;
    number: number;
};

export default function Reaction(props: ReactionProps)
{
    return <span>
        {props.icon} &nbsp;{props.number}
    </span>;
}
