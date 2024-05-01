
import { useState } from 'react';

import type PostView from '^/domain/post/view/PostView';
import type ReactionView from '^/domain/reaction/view/ReactionView';

import { LoadingContainer, OrderAndAddRow, ReactionPanelList } from '^/webui/components';
import { Border, Column, Modal } from '^/webui/designsystem';
import { useDeleteReaction, useEstablishRelation, useReactions, useToggleReactionRating, useViewProfile } from '^/webui/hooks';

import CreateReaction from './CreateReaction';

export type Props = {
    post: PostView;
};

export default function Feature({ post }: Props)
{
    const [creating, setCreating] = useState<boolean>(false);

    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const toggleReactionRating = useToggleReactionRating();

    const [reactions, setReactions] = useReactions(post);

    const deleteReaction = useDeleteReaction(reactions as ReactionView[], setReactions);

    const openModal = () =>
    {
        setCreating(true);
    };

    const closeModal = (reaction?: ReactionView) =>
    {
        setCreating(false);

        if (reaction !== undefined)
        {
            const result = [reaction, ...reactions as ReactionView[]];

            setReactions(result);
        }
    };

    return <>
        <Modal open={creating} width='660px'>
            <Border padding='small'>
                <CreateReaction post={post} handleDone={closeModal} />
            </Border>
        </Modal>
        <Column alignX='stretch'>
            <OrderAndAddRow selected='recent' reactionHandler={openModal} />
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
