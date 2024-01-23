
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import { Panel } from '../../designsystem/module';

import PropertiesRow from './PropertiesRow';

export type Props = {
    relation: RelationView;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    const relation = props.relation;
    const followHandler = props.followHandler;

    return <Panel>
        <PropertiesRow relation={relation} followHandler={followHandler} />
    </Panel>;
}
