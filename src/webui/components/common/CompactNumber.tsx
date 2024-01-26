
import React from 'react';

import { Text } from '../../designsystem/module';

export type CompactNumberProps = {
    value: number;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

export default function CompactNumber({ value, size, weight }: CompactNumberProps)
{
    size ??= 'medium';
    weight ??= 'normal';

    return <Text
        value={formatter.format(value)}
        size={size}
        weight={weight}
    />;
}
