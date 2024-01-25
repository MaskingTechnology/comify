
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './elements/AvatarRow';
import JoinedColumn from './elements/JoinedColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={props.creator.portrait.dataUrl}>
        <JoinedColumn
            fullName={props.creator.fullName}
            nickName={props.creator.nickName}
            joinedAt={props.creator.joinedAt}
        />
    </AvatarRow>;
}
