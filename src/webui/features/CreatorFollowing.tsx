
import React, { useState, useEffect } from 'react';

import type RelationView from '../../domain/relation/view/RelationView';
import getFollowing from '../../domain/relation/getFollowing';

import { Column } from '../designsystem/module';
import { OrderAndSearchRow, RelationPanelList } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    if (creator === undefined)
    {
        return <>Nope...</>;
    }

    const getRelations = async () =>
    {
        const relations = await getFollowing(creator.id);

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
        <OrderAndSearchRow selected='recent' orderChangeHandler={handleOrderChange} />
        <RelationPanelList relations={relations} followHandler={handleFollow} />
    </Column>;
}
