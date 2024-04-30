
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type PostView from '^/domain/post/view/PostView';
import getReactionsByPost from '^/domain/reaction/getByPost';
import type ReactionView from '^/domain/reaction/view/ReactionView';
import establishRelation from '^/domain/relation/establish';
import type RelationView from '^/domain/relation/view/RelationView';

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

    const handleFollow = (relation: RelationView) =>
    {
        return establishRelation(johnDoe, relation.following.id);
    };

    const handleProfile = (relation: RelationView) =>
    {
        console.log(relation.following.fullName);
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
