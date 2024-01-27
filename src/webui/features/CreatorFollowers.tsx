
import React, { useState, useEffect } from 'react';

import type RelationView from '../../domain/relation/RelationView';
import getFollowers from '../../domain/relation/getFollowers';

import { Column } from '../designsystem/module';

import { OrderAndSearchRow, RelationPanelList } from '../components/module';

export default function Feature()
{
    const [relations, setRelations] = useState<RelationView[]>([]);

    const getRelations = async () =>
    {
        const relations = await getFollowers('0');
        setRelations(relations);
    };

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
    };

    useEffect(() => { getRelations(); }, []);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' orderChangeHandler={handleOrderChange} />
        <RelationPanelList relations={relations} followHandler={handleFollow} />
    </Column>;
}
