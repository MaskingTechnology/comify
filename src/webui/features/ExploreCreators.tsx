
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList, ScrollWatcher } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useExploreCreators, useReorderList, useViewProfile } from '^/webui/hooks';

const THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();
    const viewProfile = useViewProfile();

    const [relations, getMoreRelations] = useExploreCreators();

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' onOrderChange={reorderList} />
        <LoadingContainer data={relations}>
            <ScrollWatcher onTrigger={getMoreRelations} threshold={THRESHOLD}>
                <RelationPanelList
                    relations={relations as RelationView[]}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                />
            </ScrollWatcher>
        </LoadingContainer>
    </Column>;
}
