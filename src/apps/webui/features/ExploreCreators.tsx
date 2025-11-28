
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column } from '@maskingtech/designsystem';
import { OrderAndSearchRow, PullToRefresh, RelationPanelList, ResultSet, ScrollLoader } from '^/webui/components';

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

    const [relations, isLoading, isFinished, getMoreRelations, , refresh] = useExploreCreators();

    return <Column gap='small' alignX='stretch'>
        { /* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <OrderAndSearchRow selected='popular' onOrderChange={reorderList} onSearchChange={() => {}} />
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreRelations} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <ResultSet data={relations} isLoading={isLoading}>
                    <RelationPanelList
                        relations={relations as AggregatedRelationData[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
