
import type CreatorView from '^/domain/creator/view/CreatorView';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useCreatorFollowing, useEstablishRelation, useReorderList, useViewProfile } from '^/webui/hooks/module';

type Props = {
    creator: CreatorView;
};

export default function Feature({ creator }: Props)
{
    const viewProfile = useViewProfile();
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();

    const [relations] = useCreatorFollowing(creator);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' orderChangeHandler={reorderList} />
        <LoadingContainer data={relations}>
            <RelationPanelList
                relations={relations as RelationView[]}
                followHandler={establishRelation}
                profileHandler={viewProfile}
            />
        </LoadingContainer>
    </Column>;
}
