
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './elements/AvatarRow';
import CountersColumn from './elements/CountersColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <AvatarRow avatarSize='large' creator={props.creator}>
        <CountersColumn creator={props.creator} />
    </AvatarRow>;
}
