
import React from 'react';

import { Text } from '../designsystem/designsystem.js';

export type NumberProps = {
    value: number;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

export default function CompactNumber(props: NumberProps)
{
    return <Text value={formatter.format(props.value)} size={props.size} weight={props.weight} />;
}
