
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorTimeElapsed from '../creator/TimeElapsed';

import FollowRow from './elements/FollowRow';

export type Props = {
    relation: RelationView;
    date: Date;
    followHandler: () => void;
};

export default function Component(props: Props)
{
    return <FollowRow isFollowing={props.relation.exists} followHandler={props.followHandler}>
        <CreatorTimeElapsed creator={props.relation.following} date={props.date} />
    </FollowRow>;
}
