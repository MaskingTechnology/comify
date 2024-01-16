
import React from 'react';

import { Text } from '../../designsystem/module';

import CompactNumber from '../compactnumber/CompactNumber';

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
