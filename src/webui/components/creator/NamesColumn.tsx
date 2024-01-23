
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Column, Text } from '../../designsystem/module';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    const creator = props.creator;

    return <Column gap='none'>
        <Text value={creator.fullName} size='large' weight='bold' />
        <Text value={'@' + creator.nickName} size='medium' />
    </Column>;
}
