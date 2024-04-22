
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import establishRelation from '../../domain/relation/establish';
import getFollowing from '../../domain/relation/getFollowing';
import type RelationView from '../../domain/relation/view/RelationView';
import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    if (creator === undefined) return null;

    const getRelations = () => getFollowing(johnDoe, creator.id);

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {

        return establishRelation(johnDoe, relation.creator.id);
    };

    useEffect(() => awaitData(getRelations, setRelations), [creator]);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' orderChangeHandler={handleOrderChange} />
        <LoadingContainer data={relations}>
            <RelationPanelList relations={relations as RelationView[]} followHandler={handleFollow} />
        </LoadingContainer>
    </Column>;
}
