
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import TitledTimeElapsed from '../common/TitledTimeElapsed';
import AvatarRow from './AvatarRow';

export type Props = {
    creator: CreatorView;
    date: Date;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const date = props.date;

    return <AvatarRow avatarSize='small' creator={creator}>
        <TitledTimeElapsed title={creator.fullName} date={date} />
    </AvatarRow>;
}
