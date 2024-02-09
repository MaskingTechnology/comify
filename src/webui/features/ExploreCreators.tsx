
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import exploreRelations from '../../domain/relation/explore';
import type RelationView from '../../domain/relation/view/RelationView';
import { Loading, OrderAndSearchRow, RelationPanelList } from '../components/module';
import { Column } from '../designsystem/module';

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

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' orderChangeHandler={handleOrderChange} />
        {
            relations !== undefined
                ? <RelationPanelList relations={relations} followHandler={handleFollow} />
                : <Loading />
        }
    </Column>;
}
