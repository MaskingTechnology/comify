
import React from 'react';

import type RelationView from '../../../../domain/relation/RelationView';

import { Button } from '../../../designsystem/module';

export type Props = {
    relation: RelationView;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    return <Button
        type={props.relation.hasRelation ? 'disabled' : 'primary'}
        text={props.relation.hasRelation ? 'Following' : 'Follow'}
        clickHandler={() => props.followHandler(props.relation)}
    />;
}
