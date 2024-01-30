
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

    const value = DateFormat.fromNow(date);

    return <Text value={value} type='secondary' size={size} weight={weight} />;
}
