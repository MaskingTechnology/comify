
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorProfile from '../creator/Profile';

import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    followHandler: () => void;
};

export default function Component({ relation, followHandler }: Props)
{
    return <FollowRow isFollowing={relation.exists} followHandler={followHandler}>
        <CreatorProfile creator={relation.creator} />
    </FollowRow>;
}
