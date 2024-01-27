
import React from 'react';

import { Column, Text } from '../../designsystem/module';

import TimeElapsed from './TimeElapsed';

export type Props = {
    title: string;
    date: Date;
};

export default function Component({ title, date }: Props)
{
    return <Column alignY='justify' gap='none'>
        <Text value={title} size='large' weight='bold' />
        <TimeElapsed date={date} size='small' />
    </Column>;
}
