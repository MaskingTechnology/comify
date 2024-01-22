
import React from 'react';

import { Column, Text } from '../../designsystem/module';

export type NamesProps = {
    username: string;
    nickname: string;
};

export default function Names(props: NamesProps)
{
    return <Column gap='none'>
        <Text value={props.username} size='large' weight='bold' />
        <Text value={'@' + props.nickname} size='medium' />
    </Column>;
}
