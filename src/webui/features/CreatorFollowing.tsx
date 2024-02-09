
import { useEffect, useState } from 'react';
import getFollowing from '../../domain/relation/getFollowing';
import type RelationView from '../../domain/relation/view/RelationView';
import { Loading, OrderAndSearchRow, RelationPanelList } from '../components/module';
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

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' orderChangeHandler={handleOrderChange} />
        {
            relations !== undefined
                ? <RelationPanelList relations={relations} followHandler={handleFollow} />
                : <Loading />
        }
    </Column>;
}
