
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import getCreatorPosts from '^/domain/post/getByCreator';
import toggleRating from '^/domain/post/toggleRating';
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, PostPanelGrid } from '^/webui/components/module';
import { useCreatorContext } from '^/webui/contexts/module';
import { Column } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

export default function Feature()
{
    const { creator } = useCreatorContext();
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);
    const navigate = useNavigate();

    if (creator === undefined) return null;

    const getPosts = () => getCreatorPosts(johnDoe, creator.id);

    const handleComic = (post: PostView) =>
    {
        navigate(`/post/${post.id}`);
    };

    const handleRate = (post: PostView) =>
    {
        return toggleRating(johnDoe, post.id);
    };

    const handleReaction = (post: PostView) =>
    {
        navigate(`/post/${post.id}`);
    };

    useEffect(() => awaitData(getPosts, setPosts), [creator]);

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={posts}>
            <PostPanelGrid
                posts={posts as PostView[]}
                comicHandler={handleComic}
                rateHandler={handleRate}
                reactionHandler={handleReaction}
            />
        </LoadingContainer>
    </Column>;
}
