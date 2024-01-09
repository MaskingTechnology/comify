
import React from 'react';

import { Column, Text } from '../designsystem/designsystem.js';
import DateFormat from '../../integrations/dateformat/DateFormat.js';

export type CreatorRespondedProps = {
    username: string;
    responded: Date;
};

export default function CreatorResponded(props: CreatorRespondedProps)
{
    const respondedText = DateFormat.fromNow(props.responded);

    return <Column align='justify' gap='none'>
        <Text value={props.username} size='large' weight='bold' />
        <Text value={respondedText} size='small' />
    </Column>;
}
