
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import { Column } from '../../designsystem/module';

import PropertiesPanel from './PropertiesPanel.js';

export type Props = {
    relations: RelationView[];
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    const relations = props.relations;
    const followHandler = props.followHandler;

    return <Column gap='medium'>
        {relations.map(relation => <PropertiesPanel key={relation.creator.id} relation={relation} followHandler={followHandler} />)}
    </Column>;
}
