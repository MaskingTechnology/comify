
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import get from '^/domain/post/get';
import type PostView from '^/domain/post/view/PostView';

import { awaitData } from '^/webui/utils/module';

export default function hook()
{
    const { postId } = useParams();
    const [post, setPost] = useState<PostView | undefined>(undefined);

    if (postId !== undefined)
    {
        const getPost = () => get(johnDoe, postId);

        useEffect(() => awaitData(getPost, setPost), []);
    }

    return [post, setPost] as const;
}
