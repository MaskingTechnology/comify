
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import get from '^/domain/post/get';
import toggleRating from '^/domain/post/toggleRating';
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, PostDetailsPanel } from '^/webui/components/module';
import { Column, Ruler } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

import Reactions from './Reactions';

export default function Feature()
{
    const { postId } = useParams();

    if (postId === undefined) return null;

    const [post, setPost] = useState<PostView | undefined>(undefined);

    const getPost = () => get(johnDoe, postId);

    useEffect(() => awaitData(getPost, setPost), []);

    const handleProfile = () =>
    {
        console.log('Profile');
    };

    const handleFollow = async () =>
    {
        console.log(`Followed clicked`);
    };

    const handleRate = () =>
    {
        if (post === undefined) return Promise.resolve(false);

        return toggleRating(johnDoe, post.id);
    };

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as PostView}
                followHandler={handleFollow}
                rateHandler={handleRate}
                profileHandler={handleProfile}
            />
            <Ruler type='horizontal' />
            <Reactions post={post as PostView} />
        </LoadingContainer>
    </Column>;
}
