
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';

import { Column } from '../../designsystem/module';

import Panel from './Panel.js';

export type Props = {
    relations: RelationView[];
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            props.relations.map(relation =>
                <Panel
                    key={relation.creator.id}
                    relation={relation}
                    followHandler={() => props.followHandler(relation)}
                />
            )
        }
    </Column>;
}
