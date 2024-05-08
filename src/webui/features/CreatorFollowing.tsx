
import type CreatorView from '^/domain/creator/view/CreatorView';
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useCreatorFollowing, useEstablishRelation, useReorderList, useViewProfile } from '^/webui/hooks';

type Props = {
    readonly creator: CreatorView;
};

export default function Feature({ creator }: Props)
{
    const viewProfile = useViewProfile();
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();

    const [relations] = useCreatorFollowing(creator);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' onOrderChange={reorderList} />
        <LoadingContainer data={relations}>
            <RelationPanelList
                relations={relations as RelationView[]}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
            />
        </LoadingContainer>
    </Column>;
}
