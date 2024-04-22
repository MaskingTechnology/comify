
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import johnDoe from '../../domain/authentication/johnDoe';
import establishRelation from '../../domain/relation/establish';
import getFollowers from '../../domain/relation/getFollowers';
import type RelationView from '../../domain/relation/view/RelationView';
import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '../components/module';
import { useCreatorContext } from '../contexts/CreatorContext';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);
    const navigate = useNavigate();

    if (creator === undefined) return null;

    const getRelations = () => getFollowers(johnDoe, creator.id);

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) =>
    {

        return establishRelation(johnDoe, relation.creator.id);
    };

    const handleProfile = (relation: RelationView) =>
    {
        navigate(`/profile/${relation.creator.nickname}`);
    };

    useEffect(() => awaitData(getRelations, setRelations), [creator]);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' orderChangeHandler={handleOrderChange} />
        <LoadingContainer data={relations}>
            <RelationPanelList
                relations={relations as RelationView[]}
                followHandler={handleFollow}
                profileHandler={handleProfile}
            />
        </LoadingContainer>
    </Column>;
}
