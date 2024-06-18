
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { OrderAndSearchRow, RelationPanelList, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useExploreCreators, useReorderList, useViewProfile } from '^/webui/hooks';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();
    const viewProfile = useViewProfile();

    const [relations, isLoading, isFinished, getMoreRelations] = useExploreCreators();

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' onOrderChange={reorderList} />
        <ScrollLoader onScroll={getMoreRelations} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
            <ResultSet data={relations} isLoading={isLoading}>
                <RelationPanelList
                    relations={relations as RelationView[]}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                />
            </ResultSet>
        </ScrollLoader>
    </Column>;
}
