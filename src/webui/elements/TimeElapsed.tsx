
import React from 'react';

import { Text } from '../designsystem/designsystem.js';

import DateFormat from '../../integrations/dateformat/DateFormat.js';

export type TimeElapsedProps = {
    date: Date;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

export default function TimeElapsed(props: TimeElapsedProps)
{
    return <Text value={DateFormat.fromNow(props.date)} size={props.size} weight={props.weight} />;
}
