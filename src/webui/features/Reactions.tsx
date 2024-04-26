
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import PostView from '^/domain/post/view/PostView';
import getReactionsByPost from '^/domain/reaction/getByPost';
import ReactionView from '^/domain/reaction/view/ReactionView';

import { LoadingContainer, OrderAndAddRow, ReactionPanelList } from '^/webui/components/module';
import { Border, Column, Modal } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

import CreateReaction from './CreateReaction';

export type Props = {
    post: PostView;
};

export default function Feature({ post }: Props)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);
    const [creating, setCreating] = useState<boolean>(false);

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

    const closeModal = (reload: boolean) =>
    {
        setCreating(false);

        if (reload)
        {
            awaitData(getReactions, setReactions);
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
                    followHandler={handleFollow}
                    profileHandler={handleProfile}
                />
            </LoadingContainer>
        </Column>
    </>;
}
