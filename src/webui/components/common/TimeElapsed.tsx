
import React from 'react';

import { Text } from '../../designsystem/module';

import DateFormat from '../../../integrations/dateformat/DateFormat';

export type Props = {
    date: Date;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

export default function Component({ date, size, weight }: Props)
{
    size ??= 'medium';
    weight ??= 'normal';

    return <Text
        value={DateFormat.fromNow(date)}
        size={size}
        weight={weight}
    />;
}
