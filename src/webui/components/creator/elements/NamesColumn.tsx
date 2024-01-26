
import React from 'react';

import { Column, Text } from '../../../designsystem/module';

export type Props = {
    fullName: string;
    nickName: string;
};

export default function Element(props: Props)
{
    return <Column gap='none'>
        <Text value={props.fullName} size='large' weight='bold' />
        <Text value={'@' + props.nickName} size='medium' />
    </Column>;
}
