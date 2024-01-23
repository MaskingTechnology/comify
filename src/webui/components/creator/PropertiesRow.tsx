
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Column } from '../../designsystem/module';

import AvatarRow from './AvatarRow';
import NamesRow from './NamesRow';
import CountersRow from './CountersRow';

export type Props = {
    creator: CreatorView;
    followHandler: (creator: CreatorView) => void;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const followHandler = props.followHandler;

    return <AvatarRow avatarSize='small' creator={creator}>
        <Column gap='small' align='justify' stretch={true}>
            <NamesRow creator={creator} followHandler={followHandler} />
            <CountersRow creator={creator} />
        </Column>
    </AvatarRow>;
}
