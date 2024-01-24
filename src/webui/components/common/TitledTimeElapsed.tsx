
import React from 'react';

import { Column, Text } from '../../designsystem/module';

import TimeElapsed from './TimeElapsed';

export type Props = {
    title: string;
    date: Date;
};

export default function Component(props: Props)
{
    return <Column alignY='justify' gap='none'>
        <Text value={props.title} size='large' weight='bold' />
        <TimeElapsed date={props.date} size='small' />
    </Column>;
}
