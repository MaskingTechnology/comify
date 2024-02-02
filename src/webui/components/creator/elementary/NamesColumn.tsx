
import React from 'react';

import { Column, Text } from '../../../designsystem/module';

export type Props = {
    fullName: string;
    nickname: string;
};

export default function Component({ fullName, nickname }: Props)
{
    return <Column gap='none'>
        <Text value={fullName} size='medium' weight='bold' />
        <Text value={'@' + nickname} type='secondary' size='small' />
    </Column>;
}
