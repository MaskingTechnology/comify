
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import PostView from '^/domain/post/view/PostView';
import create from '^/domain/reaction/create';
import getReactionsByPost from '^/domain/reaction/getByPost';
import ReactionView from '^/domain/reaction/view/ReactionView';

import { LoadingContainer, OrderAndAddRow, ReactionPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

export type Props = {
    post: PostView;
};

export default function Feature({ post }: Props)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);

    const getReactions = () => getReactionsByPost(johnDoe, post.id);

    useEffect(() => awaitData(getReactions, setReactions), []);

    const handleProfile = () =>
    {
        console.log('Profile');
    };

    const handleReaction = () => 
    {
        create(johnDoe, post.id, `This is a random comment ${Math.random() * 1000}`);
    };

    const handleFollow = async () =>
    {
        console.log(`Followed clicked`);
    };

    return <Column alignX='stretch'>
        <OrderAndAddRow selected='recent' reactionHandler={handleReaction} />
        <LoadingContainer data={reactions}>
            <ReactionPanelList
                reactions={reactions as ReactionView[]}
                followHandler={handleFollow}
                profileHandler={handleProfile}
            />
        </LoadingContainer>
    </Column>;
}
