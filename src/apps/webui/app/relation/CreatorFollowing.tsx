
import { Column } from '@maskingtech/designsystem';

import { OrderAndSearchRow, PullToRefresh, LoadingAndResultContainer, ScrollLoader } from '~/app/common';
import { useViewProfile } from '~/app/profile';

import PanelList from './components/PanelList';

import useCreatorFollowing from './hooks/useCreatorFollowing';
import useEstablishRelation from './hooks/useEstablish';
import useReorderList from './hooks/useReorderList';

type Props = {
    readonly creatorId?: string;
};

const SCROLL_THRESHOLD = 0.9;

export default function Feature({ creatorId }: Props)
{
    const viewProfile = useViewProfile();
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();

    const [relations, isLoading, isFinished, getMoreRelations, , refresh] = useCreatorFollowing(creatorId);

    return <Column gap='medium' alignX='stretch'>
        { /* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <OrderAndSearchRow selected='recent' onOrderChange={reorderList} onSearchChange={() => {}} />
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreRelations} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <LoadingAndResultContainer data={relations} isLoading={isLoading}>
                    <PanelList
                        relations={relations}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                    />
                </LoadingAndResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
