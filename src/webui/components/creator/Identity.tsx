
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './elements/AvatarRow';
import NamesColumn from './elements/NamesColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <AvatarRow avatarSize='small' creator={props.creator}>
        <NamesColumn creator={props.creator} />
    </AvatarRow>;
}
