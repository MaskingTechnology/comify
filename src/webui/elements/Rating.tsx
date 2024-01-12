
import React from 'react';

import { Row } from '../designsystem/designsystem.js';
import { IconProps } from '../designsystem/elements/icon/Icon.js';

import CompactNumber from './CompactNumber.js';

export type ReactionProps = {
    icon: React.ReactElement<IconProps>;
    number: number;
};

export default function Reaction(props: ReactionProps)
{
    return <Row gap='none'>
        {props.icon}
        <CompactNumber value={props.number} />
    </Row>;
}
