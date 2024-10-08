
import { useCallback } from 'react';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ConfirmationPanel, OrderAndAddRow, PullToRefresh, ReactionPanelList, ResultSet, ScrollLoader } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useReactions from './hooks/useReactions';
import useRemoveReactionFromList from './hooks/useRemoveReactionFromList';
import useToggleReactionRating from './hooks/useToggleReactionRating';
import useViewProfile from './hooks/useViewProfile';

import CreateReaction from './CreateReaction';

type Props = {
    readonly post: PostView;
};

const SCROLL_THRESHOLD = 0.8;

export default function Feature({ post }: Props)
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const toggleReactionRating = useToggleReactionRating();

    const [reactions, isLoading, isFinished, getMoreReactions, setReactions, refresh] = useReactions(post);

    const removeReaction = useRemoveReactionFromList(reactions as ReactionView[], setReactions);

    const addReaction = useCallback((reaction?: ReactionView) =>
    {
        if (reaction === undefined) return;

        const result = [reaction, ...reactions as ReactionView[]];

        setReactions(result);

    }, [reactions, setReactions]);

    const createReaction = useCallback(() =>
    {
        const content = <CreateReaction
            post={post}
            handleDone={(reaction?: ReactionView) => { closeModal(); addReaction(reaction); }}
        />;

        showModal(content);

    }, [addReaction, closeModal, post, showModal]);

    const deleteReaction = useCallback(async (reaction: ReactionView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeReaction(reaction); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removeReaction]);

    return <Column alignX='stretch'>
        <OrderAndAddRow selected='recent' reactionHandler={createReaction} />
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMoreReactions} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <ResultSet data={reactions} isLoading={isLoading}>
                    <ReactionPanelList
                        reactions={reactions as ReactionView[]}
                        onFollowClick={establishRelation}
                        onCreatorClick={viewProfile}
                        onRatingClick={toggleReactionRating}
                        onDeleteClick={deleteReaction}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
