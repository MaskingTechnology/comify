
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
    return <AvatarRow avatarSize='small' avatarUrl={props.creator.portrait.dataUrl}>
        <TitledTimeElapsed
            title={props.creator.fullName}
            date={props.date}
        />
    </AvatarRow>;
}
