
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useExploreCreators, useReorderList, useViewProfile } from '^/webui/hooks';

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
