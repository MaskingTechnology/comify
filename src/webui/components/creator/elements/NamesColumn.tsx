
import React from 'react';

import { Column, Text } from '../../../designsystem/module';

export type Props = {
    fullName: string;
    nickName: string;
};

export default function Element({ fullName, nickName }: Props)
{
    return <Column gap='none'>
        <Text value={fullName} size='large' weight='bold' />
        <Text value={'@' + nickName} size='medium' />
    </Column>;
}
