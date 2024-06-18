

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ConfirmationPanel, OrderAndAddRow, ReactionPanelList, ResultSet, ScrollLoader } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useReactions, useRemoveReaction, useToggleReactionRating, useViewProfile } from '^/webui/hooks';

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

    const [reactions, isLoading, isFinished, getMoreReactions, setReactions] = useReactions(post);

    const removeReaction = useRemoveReaction(reactions as ReactionView[], setReactions);

    const addReaction = (reaction?: ReactionView) =>
    {
        if (reaction === undefined) return;

        const result = [reaction, ...reactions as ReactionView[]];

        setReactions(result);
    };

    const createReaction = () =>
    {
        const content = <CreateReaction
            post={post}
            handleDone={(reaction?: ReactionView) => { closeModal(); addReaction(reaction); }}
        />;

        showModal(content);
    };

    const deleteReaction = async (reaction: ReactionView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeReaction(reaction); }}
            onCancel={() => closeModal()} />;

        showModal(panel);
    };

    return <Column alignX='stretch'>
        <OrderAndAddRow selected='recent' reactionHandler={createReaction} />
        <ScrollLoader onScroll={getMoreReactions} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
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
    </Column>;
}
