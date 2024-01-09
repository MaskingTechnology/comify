
import React from 'react';

import { Column, Text } from '../designsystem/designsystem.js';

export type CreatorNamesProps = {
    username: string;
    nickname: string;
};

export default function CreatorNames(props: CreatorNamesProps)
{
    return <Column gap='none'>
        <Text value={props.username} size='large' weight='bold' />
        <Text value={'@' + props.nickname} size='medium' />
    </Column>;
}
