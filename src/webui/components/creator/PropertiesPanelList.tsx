
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Column } from '../../designsystem/module';

import PropertiesPanel from './PropertiesPanel.js';

export type Props = {
    creators: CreatorView[];
    followHandler: (creator: CreatorView) => void;
};

export default function Component(props: Props)
{
    const creators = props.creators;
    const followHandler = props.followHandler;

    return <Column gap='medium'>
        {creators.map(creator => <PropertiesPanel key={creator.id} creator={creator} followHandler={followHandler} />)}
    </Column>;
}
