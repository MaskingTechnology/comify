
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import { Button } from '../../designsystem/module';

export type Props = {
    relation: RelationView;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    const relation = props.relation;
    const isFollowing = relation.hasRelation;

    const followHandler = props.followHandler;

    return <Button
        type={isFollowing ? 'disabled' : 'primary'}
        text={isFollowing ? 'Following' : 'Follow'}
        clickHandler={() => followHandler(relation)}
    />;
}
