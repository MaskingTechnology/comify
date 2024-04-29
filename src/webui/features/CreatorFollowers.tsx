
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import establishRelation from '^/domain/relation/establish';
import getFollowers from '^/domain/relation/getFollowers';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '^/webui/components/module';
import { useCreatorContext } from '^/webui/contexts/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

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

        return establishRelation(johnDoe, relation.following.id);
    };

    const handleProfile = (relation: RelationView) =>
    {
        navigate(`/profile/${relation.following.nickname}`);
    };

    const handleEdit = (relation: RelationView) =>
    {
        console.log(`edit profile of: ${relation.following.fullName}`);
    };

    useEffect(() => awaitData(getRelations, setRelations), [creator]);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' orderChangeHandler={handleOrderChange} />
        <LoadingContainer data={relations}>
            <RelationPanelList
                relations={relations as RelationView[]}
                followHandler={handleFollow}
                profileHandler={handleProfile}
                editHandler={handleEdit}
            />
        </LoadingContainer>
    </Column>;
}
