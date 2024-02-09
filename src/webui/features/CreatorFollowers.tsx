
import { useEffect, useState } from 'react';
import getFollowers from '../../domain/relation/getFollowers';
import type RelationView from '../../domain/relation/view/RelationView';
import { OrderAndSearchRow, RelationPanelList } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';
import { Column } from '../designsystem/module';

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
        const relations = await getFollowers(creator.id);
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
