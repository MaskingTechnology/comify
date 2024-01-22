
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import PropertiesPanel from './PropertiesPanel.js';

export type Props = {
    creators: Creator[];
    followHandler: (creator: Creator) => void;
};

export default function Component(props: Props)
{
    const creators = props.creators;
    const followHandler = props.followHandler;

    return creators.map(creator => <PropertiesPanel key={creator.id} creator={creator} followHandler={followHandler} />);
}
