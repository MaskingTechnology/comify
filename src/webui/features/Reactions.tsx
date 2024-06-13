

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ConfirmationPanel, LoadingContainer, OrderAndAddRow, ReactionPanelList } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useReactions, useRemoveReaction, useToggleReactionRating, useViewProfile } from '^/webui/hooks';

import CreateReaction from './CreateReaction';

type Props = {
    readonly post: PostView;
};

export default function Feature({ post }: Props)
{
    const { openModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const toggleReactionRating = useToggleReactionRating();

    const [reactions, setReactions] = useReactions(post);

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

        openModal(content);
    };

    const deleteReaction = async (reaction: ReactionView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeReaction(reaction); }}
            onCancel={() => closeModal()} />;

        openModal(panel);
    };

    return <>
        <Column alignX='stretch'>
            <OrderAndAddRow selected='recent' reactionHandler={createReaction} />
            <LoadingContainer data={reactions}>
                <ReactionPanelList
                    reactions={reactions as ReactionView[]}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                    onRatingClick={toggleReactionRating}
                    onDeleteClick={deleteReaction}
                />
            </LoadingContainer>
        </Column>
    </>;
}
