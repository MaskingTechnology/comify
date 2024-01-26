

import React, { useState, useEffect } from 'react';

import type RelationView from '../../domain/relation/RelationView';
import exploreRelations from '../../domain/relation/explore';

import { Column, Row, TextBox } from '../designsystem/module';


import { OrderSelection, RelationPanelList } from '../components/module';

export default function Feature()
{
    const [relations, setRelations] = useState<RelationView[]>([]);

    const getRelations = async () =>
    {
        const relations = await exploreRelations();
        setRelations(relations);
    };

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.following.fullName}`);
    };

    useEffect(() => { getRelations(); }, []);

    return <Column gap='small' alignX='stretch'>
        <Row alignX='justify'>
            <OrderSelection key='creators' selected='popular' changeHandler={handleOrderChange} />
            <TextBox name='search' placeholder='Search' />
        </Row>
        <RelationPanelList relations={relations} followHandler={handleFollow} />
    </Column>;
}
