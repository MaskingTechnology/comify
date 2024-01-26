
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import TitledTimeElapsed from '../common/TitledTimeElapsed';
import AvatarRow from './elements/AvatarRow';

export type Props = {
    creator: CreatorView;
    date: Date;
};

export default function Component({ creator, date }: Props)
{
    return <AvatarRow avatarSize='small' avatarUrl={creator.portrait.dataUrl}>
        <TitledTimeElapsed
            title={creator.fullName}
            date={date}
        />
    </AvatarRow>;
}
