
import React from 'react';

import { Text } from '../../designsystem/module';

import CompactNumber from './CompactNumber';

export type QuantifierProps = {
    value: number;
    text: string;
};

export default function Quantifier({ value, text }: QuantifierProps)
{
    return <span>
        <CompactNumber value={value} weight='bold' />
        &nbsp;
        <Text value={text} size='small' />
    </span>;
}
