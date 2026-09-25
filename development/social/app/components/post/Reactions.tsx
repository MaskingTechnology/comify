
import { Column } from '@maskingtech/designsystem';

import { type Post } from '^/domain/post';

import { PullToRefresh, ResultContainer, ScrollLoader, OrderAndAddRow } from '~/components/common';
import { useViewProfile } from '~/components/creator.profile';
import { useToggle } from '~/components/post.rating';
import { useEstablish } from '~/components/relation';

import PanelList from './components/PanelList';
import useReactions from './hooks/useReactions';
import useShowCreateReaction from './hooks/useShowCreateReaction';
import useViewPostDetails from './hooks/useViewPostDetails';

type Props = {
    readonly post: Post;
};

const SCROLL_THRESHOLD = 0.8;

export default function ({ post }: Props)
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
                <ResultContainer data={reactions} isLoading={isLoading}>
                    <PanelList
                        posts={reactions as Post[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                        onRatingClick={togglePostRating}
                        onContentClick={viewPostDetails}
                        onReactionClick={viewPostDetails}
                    />
                </ResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
