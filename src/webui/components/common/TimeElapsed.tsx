
import React from 'react';

import { Text } from '../../designsystem/module';

import DateFormat from '../../../integrations/dateformat/DateFormat';

export type TimeElapsedProps = {
    date: Date;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

export default function TimeElapsed({ date, size, weight }: TimeElapsedProps)
{
    size ??= 'medium';
    weight ??= 'normal';

    return <Text
        value={DateFormat.fromNow(date)}
        size={size}
        weight={weight}
    />;
}
