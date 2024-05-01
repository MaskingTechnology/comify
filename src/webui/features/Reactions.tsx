
import { useState } from 'react';

import type PostView from '^/domain/post/view/PostView';
import remove from '^/domain/reaction/remove';
import type ReactionView from '^/domain/reaction/view/ReactionView';

import { LoadingContainer, OrderAndAddRow, ReactionPanelList } from '^/webui/components';
import { Border, Column, Modal } from '^/webui/designsystem';
import { useEstablishRelation, useReactions, useToggleReactionRating, useViewProfile } from '^/webui/hooks';

import CreateReaction from './CreateReaction';

export type Props = {
    post: PostView;
};

export default function Feature({ post }: Props)
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const toggleReactionRating = useToggleReactionRating();

    const [reactions, setReactions] = useReactions(post);

    const [creating, setCreating] = useState<boolean>(false);

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

    const deleteReaction = async (reaction: ReactionView) =>
    {
        await remove(johnDoe, reaction.id);

        const result = (reactions as ReactionView[]).filter(item => item.id !== reaction.id);

        setReactions(result);
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
                    identity={identity}
                    reactions={reactions as ReactionView[]}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                    onRatingClick={toggleReactionRating}
                    deleteHandler={deleteReaction}
                />
            </LoadingContainer>
        </Column>
    </>;
}
