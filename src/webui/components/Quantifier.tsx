
import React from 'react';

import { Text } from '../designsystem/designsystem.js';

import CompactNumber from '../elements/CompactNumber.js';

export type QuantifierProps = {
    value: number;
    text: string;
};

export default function Quantifier(props: QuantifierProps)
{
    return <span>
        <CompactNumber value={props.value} weight='bold' />
        &nbsp;
        <Text value={props.text} size='small' />
    </span>;
}
