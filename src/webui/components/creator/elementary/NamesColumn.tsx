
import React from 'react';

import { Column, Text } from '../../../designsystem/module';

export type Props = {
    fullName: string;
    nickName: string;
};

export default function Component({ fullName, nickName }: Props)
{
    return <Column gap='none'>
        <Text value={fullName} size='medium' weight='bold' />
        <Text value={'@' + nickName} type='secondary' size='small' />
    </Column>;
}
