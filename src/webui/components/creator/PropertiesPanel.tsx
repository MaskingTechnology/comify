
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import { Panel } from '../../designsystem/module';

import PropertiesRow from './PropertiesRow';

export type Props = {
    creator: Creator;
    followHandler: (creator: Creator) => void;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const followHandler = props.followHandler;

    return <Panel>
        <PropertiesRow creator={creator} followHandler={followHandler} />
    </Panel>;
}
