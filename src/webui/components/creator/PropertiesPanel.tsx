
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Panel } from '../../designsystem/module';

import PropertiesRow from './PropertiesRow';

export type Props = {
    creator: CreatorView;
    followHandler: (creator: CreatorView) => void;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const followHandler = props.followHandler;

    return <Panel>
        <PropertiesRow creator={creator} followHandler={followHandler} />
    </Panel>;
}
