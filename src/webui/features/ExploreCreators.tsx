
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { OrderAndSearchRow, RelationPanelList, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useExploreCreators from './hooks/useExploreCreators';
import useReorderList from './hooks/useReorderList';
import useViewProfile from './hooks/useViewProfile';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();
    const viewProfile = useViewProfile();

    const [relations, isLoading, isFinished, getMoreRelations] = useExploreCreators();

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='popular' onOrderChange={reorderList} onSearchChange={() => { }} />
        <ScrollLoader onLoad={getMoreRelations} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
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
