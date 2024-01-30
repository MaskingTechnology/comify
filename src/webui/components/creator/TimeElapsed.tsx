
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import TimeElapsedColumn from './elementary/TimeElapsedColumn';
import AvatarRow from './elementary/AvatarRow';

export type Props = {
    creator: CreatorView;
    date: Date;
};

export default function Component({ creator, date }: Props)
{
    return <AvatarRow avatarSize='small' avatarUrl={creator.portrait?.dataUrl}>
        <TimeElapsedColumn
            fullName={creator.fullName}
            date={date}
        />
    </AvatarRow>;
}
