
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import explorePosts from '^/domain/post/explore/feature';
import type PostView from '^/domain/post/view/PostView';

import { awaitData } from '^/webui/utils';

export function useExplorePosts()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => explorePosts(johnDoe);

    useEffect(() => awaitData(getPosts, setPosts), []);

    return [posts, setPosts] as const;
}
