
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import SortOptions from '^/domain/relation/definitions/SortOptions';
import establishRelation from '^/domain/relation/establish';
import exploreRelations from '^/domain/relation/explore';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

export default function Feature()
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getRelations = () => exploreRelations(johnDoe, SortOptions.POPULAR);

    const navigate = useNavigate();

    const handleOrderChange = (oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);
    };

    const handleFollow = (relation: RelationView) => 
    {
        return establishRelation(johnDoe, relation.following.id);
    };

    const handleProfile = (relation: RelationView) =>
    {
        navigate(`/profile/${relation.following.nickname}`);
    };

    useEffect(() => awaitData(getRelations, setRelations), []);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' orderChangeHandler={handleOrderChange} />
        <LoadingContainer data={relations}>
            <RelationPanelList relations={relations as RelationView[]} followHandler={handleFollow} profileHandler={handleProfile} />
        </LoadingContainer>
    </Column>;
}
