
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import establishRelation from '../../domain/relation/establish';
import getFollowing from '../../domain/relation/getFollowing';
import type RelationView from '../../domain/relation/view/RelationView';
import { Loading, OrderAndSearchRow, RelationPanelList } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    if (creator === undefined) return null;

    const getRelations = () => getFollowing(creator.id);

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {
        console.log(`Followed ${relation.creator.fullName}`);
        return establishRelation(johnDoe, relation.creator.id);
    };

    useEffect(() => awaitData(getRelations, setRelations), [creator]);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' orderChangeHandler={handleOrderChange} />
        {
            relations !== undefined
                ? <RelationPanelList relations={relations} followHandler={handleFollow} />
                : <Loading />
        }
    </Column>;
}
