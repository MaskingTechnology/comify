
import { useCallback } from 'react';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { OrderAndAddRow, PostPanelList, PullToRefresh, ResultSet, ScrollLoader } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useReactions from './hooks/usePostReactions';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';

import CreatePostReaction from './CreatePostReaction';

type Props = {
    readonly post: AggregatedPostData;
};

const SCROLL_THRESHOLD = 0.8;

export default function Feature({ post }: Props)
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useTogglePostRating();

    const [reactions, isLoading, isFinished, getMoreReactions, setReactions, refresh] = useReactions(post);

    const addReaction = useCallback((reaction?: AggregatedPostData) =>
    {
        if (reaction === undefined) return;

        const result = [reaction, ...reactions as AggregatedPostData[]];

        setReactions(result);

    }, [reactions, setReactions]);

    const createReaction = useCallback(() =>
    {
        const content = <CreatePostReaction
            post={post}
            handleDone={(reaction?: AggregatedPostData) => { closeModal(); addReaction(reaction); }}
        />;

        showModal(content);

    }, [addReaction, closeModal, post, showModal]);

    return <Column alignX='stretch'>
        <OrderAndAddRow selected='recent' reactionHandler={createReaction} />
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreReactions} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <ResultSet data={reactions} isLoading={isLoading}>
                    <PostPanelList
                        posts={reactions as AggregatedPostData[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                        onRatingClick={togglePostRating}
                        onContentClick={viewPostDetails}
                        onReactionClick={viewPostDetails}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
