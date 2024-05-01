
import type RelationView from '^/domain/relation/view/RelationView';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useEstablishRelation, useExploreCreators, useReorderList, useViewProfile } from '^/webui/hooks/module';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();
    const viewProfile = useViewProfile();

    const [relations] = useExploreCreators();

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' onOrderChange={reorderList} />
        <LoadingContainer data={relations}>
            <RelationPanelList
                relations={relations as RelationView[]}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
            />
        </LoadingContainer>
    </Column>;
}
