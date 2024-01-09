
import React from 'react';

import { Text } from '../designsystem/designsystem.js';

export type QuantifierProps = {
    value: number;
    text: string;
};

const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

export default function Quantifier(props: QuantifierProps)
{
    return <span>
        <Text value={formatter.format(props.value)} size='medium' weight='bold' />
        &nbsp;
        <Text value={props.text} size='small' />
    </span>;
}
