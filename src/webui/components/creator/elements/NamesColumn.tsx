
import React from 'react';

import type CreatorView from '../../../../domain/creator/CreatorView';

import { Column, Text } from '../../../designsystem/module';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <Column gap='none'>
        <Text value={props.creator.fullName} size='large' weight='bold' />
        <Text value={'@' + props.creator.nickName} size='medium' />
    </Column>;
}
