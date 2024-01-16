
import React from 'react';

import { Column, Text } from '../../designsystem/module';

import TimeElapsed from '../common/TimeElapsed';

export type ResponseProps = {
    username: string;
    date: Date;
};

export default function Response(props: ResponseProps)
{
    return <Column align='justify' gap='none'>
        <Text value={props.username} size='large' weight='bold' />
        <TimeElapsed date={props.date} size='small' />
    </Column>;
}
