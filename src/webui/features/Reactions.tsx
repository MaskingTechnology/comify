
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import PostView from '^/domain/post/view/PostView';
import getReactionsByPost from '^/domain/reaction/getByPost';
import remove from '^/domain/reaction/remove';
import type ReactionView from '^/domain/reaction/view/ReactionView';

import { LoadingContainer, OrderAndAddRow, ReactionPanelList } from '^/webui/components/module';
import { Border, Column, Modal } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

import { useAppContext } from '../contexts/AppContext';
import CreateReaction from './CreateReaction';

export type Props = {
    post: PostView;
};

export default function Feature({ post }: Props)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);
    const [creating, setCreating] = useState<boolean>(false);

    const { identity } = useAppContext();

    const getReactions = () => getReactionsByPost(johnDoe, post.id);

    useEffect(() => awaitData(getReactions, setReactions), [post]);

    const handleProfile = () =>
    {
        console.log('Profile');
    };

    const handleFollow = async () =>
    {
        console.log(`Followed clicked`);
    };

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
                    followHandler={handleFollow}
                    profileHandler={handleProfile}
                    deleteHandler={deleteReaction}
                />
            </LoadingContainer>
        </Column>
    </>;
}
