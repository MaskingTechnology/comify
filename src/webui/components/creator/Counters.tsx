
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import AvatarRow from './elements/AvatarRow';
import CountersColumn from './elements/CountersColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={props.creator.portrait.dataUrl}>
        <CountersColumn
            fullName={props.creator.fullName}
            nickName={props.creator.nickName}
            postCount={props.creator.postCount}
            followerCount={props.creator.followerCount}
            followingCount={props.creator.followingCount}
        />
    </AvatarRow>;
}
