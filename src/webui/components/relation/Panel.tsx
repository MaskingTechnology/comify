
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import { Panel } from '../../designsystem/module';

import Counters from './Counters';

export type Props = {
    relation: RelationView;
    followHandler: () => void;
};

export default function Component({ relation, followHandler }: Props)
{
    return <Panel>
        <Counters relation={relation} followHandler={followHandler} />
    </Panel>;
}
