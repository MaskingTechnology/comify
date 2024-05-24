
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import getTimelinePosts from '^/domain/post/timeline/feature';
import type PostView from '^/domain/post/view/PostView';

import { awaitData } from '^/webui/utils';

export function useTimelinePosts()
{
    const [posts, setPosts] = useState<PostView[] | undefined>(undefined);

    const getPosts = () => getTimelinePosts(johnDoe);

    useEffect(() => awaitData(getPosts, setPosts), []);

    return [posts, setPosts] as const;
}
