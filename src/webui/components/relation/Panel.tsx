
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import { Panel } from '../../designsystem/module';

import Counters from './Counters';

export type Props = {
    relation: RelationView;
    followHandler: () => void;
};

export default function Component(props: Props)
{
    return <Panel>
        <Counters relation={props.relation} followHandler={props.followHandler} />
    </Panel>;
}
