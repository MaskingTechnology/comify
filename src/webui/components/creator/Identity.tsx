
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './elements/AvatarRow';
import NamesColumn from './elements/NamesColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component({ creator }: Props)
{
    return <AvatarRow avatarSize='small' avatarUrl={creator.portrait.dataUrl}>
        <NamesColumn
            fullName={creator.fullName}
            nickName={creator.nickName}
        />
    </AvatarRow>;
}
