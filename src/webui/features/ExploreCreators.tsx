
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import SortOptions from '../../domain/relation/definitions/SortOptions';
import establishRelation from '../../domain/relation/establish';
import exploreRelations from '../../domain/relation/explore';
import type RelationView from '../../domain/relation/view/RelationView';
import { Loading, OrderAndSearchRow, RelationPanelList } from '../components/module';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';


export default function Feature()
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getRelations = () => exploreRelations(johnDoe, SortOptions.POPULAR);

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) => 
    {

        return establishRelation(johnDoe, relation.creator.id);
    };

    useEffect(() => awaitData(getRelations, setRelations), []);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' orderChangeHandler={handleOrderChange} />
        {
            relations !== undefined
                ? <RelationPanelList relations={relations} followHandler={handleFollow} />
                : <Loading />
        }
    </Column>;
}
