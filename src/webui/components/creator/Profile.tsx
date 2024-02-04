
import React from 'react';

import type CreatorView from '../../../domain/creator/view/CreatorView';

import AvatarRow from './elementary/AvatarRow';
import JoinedColumn from './elementary/JoinedColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component({ creator }: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={creator.portrait?.dataUrl}>
        <JoinedColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
            joinedAt={creator.joinedAt}
        />
    </AvatarRow>;
}
