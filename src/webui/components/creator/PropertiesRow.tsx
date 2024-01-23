
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Column } from '../../designsystem/module';

import AvatarRow from './AvatarRow';
import NamesRow from './NamesRow';
import CountersRow from './CountersRow';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    const creator = props.creator;

    return <AvatarRow avatarSize='small' creator={creator}>
        <Column gap='small' align='justify' stretch={true}>
            <NamesRow creator={creator} />
            <CountersRow creator={creator} />
        </Column>
    </AvatarRow>;
}
