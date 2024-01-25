
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './elements/AvatarRow';
import NamesColumn from './elements/NamesColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <AvatarRow avatarSize='small' avatarUrl={props.creator.portrait.dataUrl}>
        <NamesColumn
            fullName={props.creator.fullName}
            nickName={props.creator.nickName}
        />
    </AvatarRow>;
}
