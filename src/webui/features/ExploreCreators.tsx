
import React, { useState, useEffect } from 'react';

import type RelationView from '../../domain/relation/view/RelationView';
import exploreRelations from '../../domain/relation/explore';
import johnDoe from '../../domain/authentication/johnDoe';

import { Column } from '../designsystem/module';

import { OrderAndSearchRow, RelationPanelList } from '../components/module';

export default function Feature()
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getRelations = async () =>
    {
        const relations = await exploreRelations(johnDoe);

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

    if (relations === undefined)
    {
        return <>Loading...</>;
    }

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' orderChangeHandler={handleOrderChange} />
        <RelationPanelList relations={relations} followHandler={handleFollow} />
    </Column>;
}
