
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import TitledTimeElapsed from '../common/TitledTimeElapsed';
import AvatarRow from './elements/AvatarRow';

export type Props = {
    creator: CreatorView;
    date: Date;
};

export default function Component(props: Props)
{
    return <AvatarRow avatarSize='small' creator={props.creator}>
        <TitledTimeElapsed title={props.creator.fullName} date={props.date} />
    </AvatarRow>;
}
