
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './AvatarRow';
import NamesColumn from './NamesColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    const creator = props.creator;

    return <AvatarRow avatarSize='small' creator={creator}>
        <NamesColumn creator={creator} />
    </AvatarRow>;
}
