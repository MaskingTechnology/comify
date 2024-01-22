
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import AvatarRow from './AvatarRow';
import NamesColumn from './NamesColumn';

export type Props = {
    creator: Creator;
};

export default function Component(props: Props)
{
    const creator = props.creator;

    return <AvatarRow avatarSize='small' creator={creator}>
        <NamesColumn creator={creator} />
    </AvatarRow>;
}
