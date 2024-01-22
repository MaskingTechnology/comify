
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import { Column, Text } from '../../designsystem/module';

export type Props = {
    creator: Creator;
};

export default function Component(props: Props)
{
    const creator = props.creator;

    return <Column gap='none'>
        <Text value={creator.fullName} size='large' weight='bold' />
        <Text value={'@' + creator.nickName} size='medium' />
    </Column>;
}
