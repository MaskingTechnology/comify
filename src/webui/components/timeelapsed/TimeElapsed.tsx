
import React from 'react';

import { Text } from '../../designsystem/module';

import DateFormat from '../../../integrations/dateformat/DateFormat';

export type TimeElapsedProps = {
    date: Date;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

export default function TimeElapsed(props: TimeElapsedProps)
{
    const size = props.size ?? 'medium';
    const weight = props.weight ?? 'normal';

    return <Text
        value={DateFormat.fromNow(props.date)}
        size={size}
        weight={weight}
    />;
}
