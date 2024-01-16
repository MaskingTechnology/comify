
import React from 'react';

import { Column, Text } from '../../designsystem/module';

import TimeElapsed from '../timeelapsed/TimeElapsed';

export type CreatorResponseProps = {
    username: string;
    date: Date;
};

export default function CreatorResponse(props: CreatorResponseProps)
{
    return <Column align='justify' gap='none'>
        <Text value={props.username} size='large' weight='bold' />
        <TimeElapsed date={props.date} size='small' />
    </Column>;
}
