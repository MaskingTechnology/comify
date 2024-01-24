
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './elements/AvatarRow';
import JoinedColumn from './elements/JoinedColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <AvatarRow avatarSize='large' creator={props.creator}>
        <JoinedColumn creator={props.creator} />
    </AvatarRow>;
}
