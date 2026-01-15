
import { Column } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { PullToRefresh, LoadingAndResultContainer, ScrollLoader, OrderAndAddRow } from '~/app/common';

import { useViewProfile } from '~/app/profile';
import { useToggle } from '~/app/rating';
import { useEstablish } from '~/app/relation';

import PanelList from './components/PanelList';

import useReactions from './hooks/useReactions';
import useViewPostDetails from './hooks/useViewPostDetails';
import useShowCreateReaction from './hooks/useShowCreateReaction'; 

type Props = {
    readonly post: AggregatedPostData;
};

const SCROLL_THRESHOLD = 0.8;

export default function Feature({ post }: Props)
{
    const establishRelation = useEstablish();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useToggle();
    const createReaction = useShowCreateReaction();

    const [reactions, isLoading, isFinished, getMoreReactions, , refresh] = useReactions(post);

    return <Column alignX='stretch'>
        <OrderAndAddRow selected='recent' reactionHandler={createReaction} />
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreReactions} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <LoadingAndResultContainer data={reactions} isLoading={isLoading}>
                    <PanelList
                        posts={reactions as AggregatedPostData[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                        onRatingClick={togglePostRating}
                        onContentClick={viewPostDetails}
                        onReactionClick={viewPostDetails}
                    />
                </LoadingAndResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
