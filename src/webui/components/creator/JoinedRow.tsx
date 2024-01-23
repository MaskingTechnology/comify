
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Column, Text } from '../../designsystem/module';

import AvatarRow from './AvatarRow';
import NamesRow from './NamesRow';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    const creator = props.creator;

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const joinedAt = creator.joinedAt ?? new Date();
    const joinedText = 'Joined ' + joinedAt.toLocaleDateString('en-GB', options);

    return <AvatarRow avatarSize='small' creator={creator}>
        <Column gap='small' align='justify' stretch={true}>
            <NamesRow creator={creator} />
            <Text value={joinedText} size='small' />
        </Column>
    </AvatarRow>;
}
