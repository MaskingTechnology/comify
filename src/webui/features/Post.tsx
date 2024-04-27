
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import get from '^/domain/post/get';
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, PostDetailsPanel } from '^/webui/components/module';
import { Column, Ruler } from '^/webui/designsystem/module';
import { awaitData } from '^/webui/utils/module';

import handleFollow from './handlers/handleFollow';
import handleRate from './handlers/handleRate';
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

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as PostView}
                followHandler={() => handleFollow((post as PostView).creator)}
                rateHandler={() => handleRate((post as PostView))}
                profileHandler={handleProfile}
            />
            <Ruler type='horizontal' />
            <Reactions post={post as PostView} />
        </LoadingContainer>
    </Column>;
}
