
import { Column } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { OrderAndSearchRow, PullToRefresh, LoadingAndResultContainer, ScrollLoader } from '~/app/common';
import { useViewProfile } from '~/app/profile';

import PanelList from './components/PanelList';

import useEstablishRelation from './hooks/useEstablish';
import useExploreCreators from './hooks/useExploreCreators';
import useReorderList from './hooks/useReorderList';

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
                <LoadingAndResultContainer data={relations} isLoading={isLoading}>
                    <PanelList
                        relations={relations as AggregatedRelationData[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                    />
                </LoadingAndResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
