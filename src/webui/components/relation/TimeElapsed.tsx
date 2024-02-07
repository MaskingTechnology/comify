
import React from 'react';

import type RelationView from '../../../domain/relation/view/RelationView';

import CreatorTimeElapsed from '../creator/TimeElapsed';

import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    date: Date;
    followHandler: () => void;
};

export default function Component({ relation, date, followHandler }: Props)
{
    return <FollowRow isFollowing={relation.exists} followHandler={followHandler}>
        <CreatorTimeElapsed creator={relation.creator} date={date} />
    </FollowRow>;
}
