
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { OrderAndSearchRow, RelationPanelList, ResultSet, ScrollLoader } from '^/webui/components';
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

    const [relations, isLoading, isFinished, getMoreRelations] = useCreatorFollowing(creator);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' onOrderChange={reorderList} />
        <ScrollLoader onScroll={getMoreRelations} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
            <ResultSet data={relations} isLoading={isLoading}>
                <RelationPanelList
                    relations={relations}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                />
            </ResultSet>
        </ScrollLoader>
    </Column>;
}
