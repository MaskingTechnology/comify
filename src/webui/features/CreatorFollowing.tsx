
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { OrderAndSearchRow, PullToRefresh, RelationPanelList, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useCreatorFollowing from './hooks/useCreatorFollowing';
import useEstablishRelation from './hooks/useEstablishRelation';
import useReorderList from './hooks/useReorderList';
import useViewProfile from './hooks/useViewProfile';

type Props = {
    readonly creator: CreatorView;
};

const SCROLL_THRESHOLD = 0.9;

export default function Feature({ creator }: Props)
{
    const viewProfile = useViewProfile();
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();

    const [relations, isLoading, isFinished, getMoreRelations, , refresh] = useCreatorFollowing(creator);

    return <Column gap='small' alignX='stretch'>
        { /* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <OrderAndSearchRow selected='recent' onOrderChange={reorderList} onSearchChange={() => {}} />
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreRelations} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <ResultSet data={relations} isLoading={isLoading}>
                    <RelationPanelList
                        relations={relations}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
