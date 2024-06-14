
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { LoadingContainer, OrderAndSearchRow, RelationPanelList, ScrollWatcher } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useCreatorFollowers, useEstablishRelation, useReorderList, useViewProfile } from '^/webui/hooks';

type Props = {
    readonly creator: CreatorView;
};

const THRESHOLD = 0.9;

export default function Feature({ creator }: Props)
{
    const viewProfile = useViewProfile();
    const establishRelation = useEstablishRelation();
    const reorderList = useReorderList();

    const [relations, getMoreRelations] = useCreatorFollowers(creator);

    return <Column gap='small' alignX='stretch'>
        <OrderAndSearchRow selected='recent' onOrderChange={reorderList} />
        <LoadingContainer data={relations}>
            <ScrollWatcher onTrigger={getMoreRelations} threshold={THRESHOLD}>
                <RelationPanelList
                    relations={relations as RelationView[]}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                />
            </ScrollWatcher >
        </LoadingContainer>
    </Column>;
}
